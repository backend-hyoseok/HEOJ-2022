import os
import random

N = 10 ** 9

for N10 in range(1, 10, 2):
    N = 10 ** N10

    for S10 in range(1, 6, 2):
        S = 10 ** S10
        H = 10 ** S10

        SA = [random.randint(1, 10000000) for i in range(S)]
        HA = [random.randint(1, 10000000) for i in range(H)]

        s = sum(SA) + sum(HA)

        with open(os.path.join(os.path.dirname(__file__), '{}_{}.in'.format(N10, S10)), 'w') as f:
            f.write("{}\n".format(N))
            f.write("{}\n".format(S))
            f.write(" ".join(map(str, SA)) + "\n")
            f.write("{}\n".format(H))
            f.write(" ".join(map(str, HA)) + "\n")

        with open(os.path.join(os.path.dirname(__file__), '{}_{}.out'.format(N10, S10)), 'w') as f:
            if s <= N:
                f.write("NO\n")
            else:
                f.write("YES\n")

for i in range(10):
    N = 10 ** 9

    H = 10 ** 5
    S = 10 ** 5

    SA = [random.randint(1, 10000) for i in range(S)]
    HA = [random.randint(1, 10000) for i in range(H)]

    s = sum(SA) + sum(HA)

    with open(os.path.join(os.path.dirname(__file__), '{}.in'.format(i)), 'w') as f:
        f.write("{}\n".format(N))
        f.write("{}\n".format(S))
        f.write(" ".join(map(str, SA)) + "\n")
        f.write("{}\n".format(H))
        f.write(" ".join(map(str, HA)) + "\n")

    with open(os.path.join(os.path.dirname(__file__), '{}.out'.format(i)), 'w') as f:
        if s <= N:
            f.write("NO\n")
        else:
            f.write("YES\n")
