import os


syscallpath = '/usr/include/x86_64-linux-gnu/asm/unistd_64.h'
outputpath = os.path.join(os.getcwd(), 'syscallnames.py')

mx = 0
arr = []
with open(syscallpath, 'r') as f:
    lines = f.readlines()
    for line in lines:
        if line.startswith('#define __NR_'):
            syscallnum = int(line.split(' ')[2])
            mx = max(mx, syscallnum)

    arr = ['unknown' for _ in range(mx+1)]
    for line in lines:
        if line.startswith('#define __NR_'):
            syscallname = line.split(' ')[1][5:]
            syscallnum = int(line.split(' ')[2])
            arr[syscallnum] = syscallname

with open(outputpath, 'w') as f:
    f.write('MAX_SYSCALLNUM={}\n\n'.format(mx+1))

    f.write('syscallnames=[\n')
    for syscallname in arr:
        f.write("    '{}',\n".format(syscallname))
    f.write(']\n')