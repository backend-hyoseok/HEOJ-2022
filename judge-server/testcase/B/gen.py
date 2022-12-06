import random
import os

# 32비트 정수 자료형 범위
INT_MAX = pow(2, 31) - 1
INT_MIN = -pow(2, 31)

for N10 in range(0, 6):
    for Q10 in range(0, 3):
        N = 10 ** N10
        Q = 10 ** Q10

        # sample을 사용해서 해당 조건 추가
        if N < Q:
            continue

        # 중복이 없는 배열을 위해 set 사용
        Aset = set()

        # 32비트 정수 자료형 범위에서 랜덤으로 뽑아
        # set이 N개 될때까지 반복
        while len(Aset) < N:
            Aset.add(random.randint(INT_MIN, INT_MAX))

        # int를 문자열로 변경 + set을 list로 변경
        A = list(map(str, Aset))

        # A 배열에서 Q개를 중복없이 뽑아오기
        QA = random.sample(A, Q)

        # 입력 파일 작성
        # 파일명에 N, Q 작성
        with open(os.path.join(os.path.dirname(__file__), 'N{}-Q{}.in'.format(N, Q)), 'w') as f:
            # 형식에 맞게 작성
            f.write('{}\n'.format(N))
            f.write(' '.join(A))
            f.write('\n')
            f.write('{}\n'.format(Q))
            f.write('\n'.join(QA))
            f.write('\n')

        # 정답 파일 작성
        # 파일명 통합
        with open(os.path.join(os.path.dirname(__file__), 'N{}-Q{}.out'.format(N, Q)), 'w') as f:
            for q in QA:
                f.write('{}\n'.format(A.index(q) + 1))
