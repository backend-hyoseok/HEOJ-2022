import os
import resource
import config

BASE_PATH = '/submissions'

def save_submission(submission):
    if submission == None:
        return False

    submission_path = os.path.join(BASE_PATH, submission['id'])
    if not os.path.exists(submission_path):
        os.mkdir(submission_path)

    if config.file_name.get(submission['language']) == None:
        print("language not found")
        return
    
    with open(os.path.join(submission_path, config.file_name[submission['language']]), 'w') as f:
        f.write(submission['code'])


def parse_memory(pid):
    total = 0
    with open('/proc/{}/maps'.format(pid), 'r') as f:
        for line in f.readlines():
            sline = line.split()
            start, end = sline[0].split('-')
            
            start = int(start, 16)
            end = int(end, 16)

            total += end - start
    return total // 1024

def set_resource_limit(time_limit, memory_limit):
    time_limit = time_limit # second
    resource.setrlimit(resource.RLIMIT_CPU, (time_limit, time_limit + 1))

    if memory_limit != None:
        memory_limit = memory_limit * 1024 * 1024 # mb to byte
        resource.setrlimit(resource.RLIMIT_AS, (memory_limit, memory_limit))
    
    resource.setrlimit(resource.RLIMIT_FSIZE, (4 * 1024 * 1024, 4 * 1024 * 1024)) # 4 MB