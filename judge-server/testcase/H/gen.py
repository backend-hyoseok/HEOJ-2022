import os
import random

for i in range(20):
    N = 1000
    QC = 1000

    count = [1, 499, 500, 501, 1000] + [random.randint(1, 1000) for _ in range(995)]
    IS = set()
    while len(IS) < 1000:
        IS.add(random.randint(1, 100000))

    I = list(IS)

    QQ = list(zip(I, count))

    Q = QQ[:]
    random.shuffle(Q)

    A = [[] for _ in range(1000)]
    H = [t for t in range(1000)]

    for id, c in QQ:
        C = random.sample(H, c)
        for k in C:
            A[k].append(id)

    with open(os.path.join(os.path.dirname(__file__), '{}.in'.format(i)), 'w') as f:
        f.write("{}\n".format(N))
        for ca in A:
            f.write("{}\n".format(len(ca)))
            f.write(" ".join(map(str, ca)) + "\n")
        f.write("{}\n".format(QC))
        for qq in Q:
            f.write("{}\n".format(qq[0]))

    with open(os.path.join(os.path.dirname(__file__), '{}.out'.format(i)), 'w') as f:
        for qq in Q:
            if qq[1] >= 500:
                f.write("Valid\n")
            else:
                f.write("Invalid\n")
