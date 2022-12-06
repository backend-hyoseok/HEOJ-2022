from bisect import bisect_left
import random
import os

# 32비트 정수 자료형 범위
INT_MAX = pow(2, 31) - 1
INT_MIN = -pow(2, 31)

for i in range(8):
    N = 100000
    Q = 100000

    Aset = set()

    # 32비트 정수 자료형 범위에서 랜덤으로 뽑아
    # set이 N개 될때까지 반복
    while len(Aset) < N:
        Aset.add(random.randint(INT_MIN, INT_MAX))

    # int를 문자열로 변경 + set을 list로 변경
    A = list(Aset)

    # A 배열에서 Q개를 중복없이 뽑아오기
    QA = A[:]
    random.shuffle(QA)

    AA = [(A[i], i) for i in range(N)]

    AA.sort(key=lambda k: k[0])

    # 입력 파일 작성
    # 파일명에 N, Q 작성
    with open(os.path.join(os.path.dirname(__file__), '{}.in'.format(i)), 'w') as f:
        # 형식에 맞게 작성
        f.write('{}\n'.format(N))
        for a in range(len(A)):
            f.write('{}'.format(A[a]))
            if a < len(A) - 1:
                f.write(' ')
            else:
                f.write('\n')
        f.write('{}\n'.format(Q))
        for qa in QA:
            f.write('{}\n'.format(qa))

    # 정답 파일 작성
    # 파일명 통합
    with open(os.path.join(os.path.dirname(__file__), '{}.out'.format(i)), 'w') as f:
        for q in QA:
            i = bisect_left(AA, q, key=lambda k: k[0])

            f.write('{}\n'.format(AA[i][1]+1))
