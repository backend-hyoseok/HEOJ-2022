import os
import random
from string import digits, ascii_letters, punctuation

TEST_CASE_COUNT_YES = 20
TEST_CASE_COUNT_NO = 20
MAX_STRING_LENGTH = 10000

printable_without_whitespace = digits + ascii_letters + punctuation
alphanumeric = digits + ascii_letters

def check(str):
    for c in str:
        if c in punctuation:
            return True
    return False

for i in range(TEST_CASE_COUNT_YES):
    S = random.choices(alphanumeric, k=MAX_STRING_LENGTH // TEST_CASE_COUNT_YES * (i + 1))

    with open(os.path.join(os.path.dirname(__file__), 'YES-{}.in'.format(i)), 'w') as f:
        f.write(''.join(S))
        f.write('\n')

    with open(os.path.join(os.path.dirname(__file__), 'YES-{}.out'.format(i)), 'w') as f:
        f.write('YES\n')

for i in range(TEST_CASE_COUNT_NO):
    S = random.choices(printable_without_whitespace, k=MAX_STRING_LENGTH // TEST_CASE_COUNT_NO * (i + 1))

    while not check(S):
        S = random.choices(printable_without_whitespace, k=MAX_STRING_LENGTH // TEST_CASE_COUNT_NO * (i + 1))

    with open(os.path.join(os.path.dirname(__file__), 'NO-{}.in'.format(i)), 'w') as f:
        f.write(''.join(S))
        f.write('\n')

    with open(os.path.join(os.path.dirname(__file__), 'NO-{}.out'.format(i)), 'w') as f:
        f.write('NO\n')