from bisect import bisect_left
import sys

N = int(sys.stdin.readline().rstrip())
A = list(map(int, sys.stdin.readline().rstrip().split(' ')))
Q = int(sys.stdin.readline().rstrip())

arr = [(A[i], i) for i in range(N)]

arr.sort(key=lambda k: k[0])

for _ in range(Q):
    k = int(sys.stdin.readline().rstrip())

    idx = bisect_left(arr, k, key=lambda q: q[0])

    print(arr[idx][1] + 1)