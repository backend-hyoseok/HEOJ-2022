N = int(input())
A = list(map(int, input().split(' ')))

Q = int(input())

for _ in range(Q):
    l, r = list(map(int, input().split(' ')))

    A = A[0:l-1] + A[r:]

print(' '.join(map(str, A)))