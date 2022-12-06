import os
import string
import random

small_alpha_number = string.ascii_lowercase + string.digits

for i in range(20):
    N = 100
    M = 100
    K = 100
    Q = 100

    PUBS = set()
    SUBS = set()
    MSGS = set()

    PUBA = []
    SUBA = []
    MSGA = []

    while len(PUBS) < N:
        PUBS.add(''.join(random.sample(small_alpha_number, 20)))

    while len(SUBS) < M:
        SUBS.add(''.join(random.sample(small_alpha_number, 20)))

    while len(MSGS) < 20:
        MSGS.add(''.join(random.sample(small_alpha_number, 20)))

    PUBA = list(PUBS)
    SUBA = list(SUBS)
    MSGA = list(MSGS)

    # 85%의 확률로 20개 중 하나 뽑고 나머지 확률로 아무 메시지 보내기

    KA = []

    for _ in range(K):
        sub = random.randint(0, M - 1)
        msg = random.randint(0, 20 - 1)

        KA.append((SUBA[sub], MSGA[msg]))

    QA = []
    for _ in range(Q):
        p = random.randint(0, 100)
        pub = random.randint(0, N - 1)

        if p <= 85:
            msg = random.randint(0, 20 - 1)
            QA.append((PUBA[pub], MSGA[msg]))
        else:
            QA.append(
                (PUBA[pub], ''.join(random.sample(small_alpha_number, 20))))

    with open(os.path.join(os.path.dirname(__file__), '{}.in'.format(i)), 'w') as f:
        f.write("{}\n".format(N))
        f.write("\n".join(PUBA) + "\n")
        f.write("{}\n".format(M))
        f.write("\n".join(SUBA) + "\n")
        f.write("{}\n".format(K))

        for sub, msg in KA:
            f.write("{} {}\n".format(sub, msg))
        f.write("{}\n".format(Q))

        for pub, msg in QA:
            f.write("{} {}\n".format(pub, msg))

    with open(os.path.join(os.path.dirname(__file__), '{}.out'.format(i)), 'w') as f:
        for pub, msg in QA:
            for sub, msg2 in KA:
                if msg == msg2:
                    f.write("{} {} {}\n".format(sub, pub, msg))
