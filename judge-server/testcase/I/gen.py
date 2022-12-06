import os
import string
import random

for i in range(20):
    S = random.choices(string.ascii_lowercase, k=10000)
    A = list(string.ascii_lowercase)
    random.shuffle(A)
    R = ''.join(A)

    with open(os.path.join(os.path.dirname(__file__), '{}.in'.format(i)), 'w') as f:
        f.write("{}\n{}\n".format(''.join(S), R))
