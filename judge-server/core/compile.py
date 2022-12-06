import subprocess


def compile(path: str, compile_command: str) -> bool:
    try:
        compile_process = subprocess.Popen(compile_command, shell=True, cwd=path, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        compile_process.wait(30)
        return compile_process.returncode == 0
    except:
        return False
