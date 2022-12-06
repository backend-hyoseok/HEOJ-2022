#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin >> n;

    pair<int, int> a[n];
    for(int i = 0 ; i < n ; i++) {
        int k;
        cin >> k;

        a[i] = { k, i };
    }

    sort(a, a + n);

    int q;
    cin >> q;

    for (int i = 0 ; i < q ; i++) {
        int k;
        cin >> k;

        int l = -1, r = n + 1;
        while(l + 1 < r) {
            int mid = (l + r) / 2;

            if (a[mid].first == k) {
                cout << a[mid].second + 1 << '\n';
                break;
            } else if (a[mid].first > k) {
                r = mid;
            } else if (a[mid].first < k) {
                l = mid;
            }
        }
    }

	return 0;
}