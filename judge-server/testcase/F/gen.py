import random
import os

# 32비트 정수 자료형 범위
INT_MAX = pow(2, 31) - 1
INT_MIN = -pow(2, 31)

for i in range(20):
    N = 10000
    Q = 100

    A = [random.randint(INT_MIN, INT_MAX) for _ in range(N)]

    MXR = N
    query = []

    for _ in range(Q):
        nowrm = random.randint(1, 100)

        R = random.randint(nowrm, MXR)
        L = R - nowrm + 1

        MXR -= nowrm

        query.append((L, R))

    answer = A[:]
    
    for l, r in query:
        answer = answer[0:l-1] + answer[r:]
    
    with open(os.path.join(os.path.dirname(__file__), '{}.in'.format(i)), 'w') as f:
        f.write("{}\n".format(N))
        f.write(" ".join(map(str, A)) + "\n")
        f.write("{}\n".format(Q))
        for l, r in query:
            f.write("{} {}\n".format(l, r))
    
    with open(os.path.join(os.path.dirname(__file__), '{}.out'.format(i)), 'w') as f:
        f.write(" ".join(map(str, answer)) + "\n")