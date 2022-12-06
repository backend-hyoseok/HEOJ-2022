import os
from pty import STDERR_FILENO, STDIN_FILENO, STDOUT_FILENO
import signal
from stat import S_IRUSR, S_IWUSR
import os
import ctypes
import syscallnames
import config
from logger import log

from compile import compile
from utils import parse_memory, set_resource_limit

libc = ctypes.CDLL('/lib/x86_64-linux-gnu/libc.so.6')
ptrace = libc.ptrace
ptrace.argtypes = [ctypes.c_int, ctypes.c_int, ctypes.c_void_p, ctypes.c_void_p]
ptrace.restype = ctypes.c_int

class user_regs_struct(ctypes.Structure):
    _fields_ = [
        ("r15", ctypes.c_ulonglong),
        ("r14", ctypes.c_ulonglong),
        ("r13", ctypes.c_ulonglong),
        ("r12", ctypes.c_ulonglong),
        ("rbp", ctypes.c_ulonglong),
        ("rbx", ctypes.c_ulonglong),
        ("r11", ctypes.c_ulonglong),
        ("r10", ctypes.c_ulonglong),
        ("r9", ctypes.c_ulonglong),
        ("r8", ctypes.c_ulonglong),
        ("rax", ctypes.c_ulonglong),
        ("rcx", ctypes.c_ulonglong),
        ("rdx", ctypes.c_ulonglong),
        ("rsi", ctypes.c_ulonglong),
        ("rdi", ctypes.c_ulonglong),
        ("orig_rax", ctypes.c_ulonglong),
        ("rip", ctypes.c_ulonglong),
        ("cs", ctypes.c_ulonglong),
        ("eflags", ctypes.c_ulonglong),
        ("rsp", ctypes.c_ulonglong),
        ("ss", ctypes.c_ulonglong),
        ("fs_base", ctypes.c_ulonglong),
        ("gs_base", ctypes.c_ulonglong),
        ("ds", ctypes.c_ulonglong),
        ("es", ctypes.c_ulonglong),
        ("fs", ctypes.c_ulonglong),
        ("gs", ctypes.c_ulonglong),
    ]

def judge(submission_id, language, problem_number):
    try:
        compile_result = compile(os.path.join('/submissions', submission_id), config.compile_command[language])
        if not compile_result:
            log("compile error {}".format(submission_id))
            return "CE"

        if not os.path.exists(os.path.join('/testcases', problem_number)):
            log("testcase not found {} {}".format(submission_id, problem_number))
            return "UA"

        for file in os.listdir(os.path.join('/testcases', problem_number)):
            if file.endswith('.in'):
                testcase_name = file[:-3]
                result = run(submission_id, language, testcase_name, problem_number)
                log("testcase result {} {} {} {}".format(submission_id, problem_number, testcase_name, result))

                if result != 'AC':
                    return result
    except Exception as e:
        return "UA"
    
    return 'AC'

def run(submission_id: str, language: str, testcase_name: str, problem_number: str):
    result = None

    child = os.fork()
    if child == 0:
        fdin = os.open(os.path.join('/testcases', problem_number, testcase_name + '.in'), os.O_RDONLY)
        os.dup2(fdin, STDIN_FILENO)
        os.close(fdin)

        fdout = os.open(os.path.join('/submissions', submission_id, testcase_name + '.out'), os.O_RDWR | os.O_CREAT, S_IRUSR | S_IWUSR)
        os.dup2(fdout, STDOUT_FILENO)
        os.close(fdout)

        fderr = os.open(os.devnull, os.O_RDWR | os.O_CREAT, S_IRUSR | S_IWUSR)
        os.dup2(fderr, STDERR_FILENO)
        os.close(fderr)

        if language != 'Java':
            set_resource_limit(1, 512)
        else:
            set_resource_limit(1, None)

        ptrace(0, 0, None, None)

        # execute command
        os.chdir(os.path.join('/submissions', submission_id))
        execute_command = config.execute_command[language]
        os.execvp(execute_command.split(' ')[0], execute_command.split(' '))
    else:
        _status = 1
        _rusage = None
        memory = 0
        memory_syscall = ['mmap', 'brk', 'munmap', 'mremap', 'execve']
        danger_syscall = ['vfork', 'fork', 'clone', 'clone3', 'kill']

        while True:
            _, status, rusage = os.wait4(child, 0)
            _status = status
            _rusage = rusage
            if os.WIFEXITED(status):
                break

            if os.WIFSTOPPED(status):
                if os.WSTOPSIG(status) == signal.SIGXCPU:
                    result = "TLE"
                    os.kill(child, signal.SIGXCPU)
                    break
                elif os.WSTOPSIG(status) == signal.SIGSEGV:
                    result = "MLE"
                    os.kill(child, signal.SIGSEGV)
                    break
                elif os.WSTOPSIG(status) == signal.SIGXFSZ:
                    result = "OLE"
                    os.kill(child, signal.SIGXFSZ)
                    break
            
            if os.WIFSIGNALED(status):
                result = "RTE"
                break

            regs = user_regs_struct()
            ptrace(12, child, None, ctypes.byref(regs))

            # Check memory usage from memory map
            if syscallnames.syscallnames[regs.orig_rax] in memory_syscall:
                now_memory = parse_memory(child)
                memory = max(memory, now_memory)
            
            # Check system call
            if (not language == 'Java') and syscallnames.syscallnames[regs.orig_rax] in danger_syscall:
                result = "BSC"
                os.kill(child, signal.SIGKILL)
                break

            ptrace(24, child, None, None)

        exitcode = os.WEXITSTATUS(_status)

        if exitcode == 0:
            if grade_output(os.path.join('/testcases', problem_number, testcase_name + '.out'), os.path.join('/submissions', submission_id, testcase_name + '.out')):
                return 'AC'
            else:
                return 'WA'
        else:
            if result == None:
                result = "RTE"
        
        return result

def grade_output(answer_path: str, output_path: str) -> bool:
    try:
        with open(output_path, 'r') as output, open(answer_path, 'r') as answer:
            output_lines = [line.strip()+'\n' for line in output.read().strip().splitlines()]
            answer_lines = [line.strip()+'\n' for line in answer.read().strip().splitlines()]

            if len(output_lines) != len(answer_lines):
                return False
            
            for output_line, answer_line in zip(output_lines, answer_lines):
                if output_line != answer_line:
                    return False
            return True
    except:
        return False