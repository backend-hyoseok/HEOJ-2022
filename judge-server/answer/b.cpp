#include <bits/stdc++.h>
using namespace std;
int main() {
	int n;
	cin >> n;

	int a[n];
	for(int i = 0 ; i < n ; i++) {
		cin >> a[i];
	}

	int q;
	cin >> q;
	for (int i = 0 ; i < q ; i++) {
		int k;
		cin >> k;

		for (int j = 0 ; j < n ; j++) {
			if (a[j] == k) cout << j + 1 << '\n';
		}
	}
	
	return 0;
}