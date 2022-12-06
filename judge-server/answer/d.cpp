#include <bits/stdc++.h>
using namespace std;
int main() {
    long long int n;
    cin >> n;

    long long int sum = 0;

    int h;
    cin >> h;

    for (int i = 0 ; i < h ; i++) {
        int k;
        cin >> k;

        sum += k;
    }

    int s;
    cin >> s;

    for (int i = 0 ; i < s ; i++) {
        int k;
        cin >> k;

        sum += k;
    }

    if (sum <= n) cout << "NO\n";
    else cout << "YES\n";
	
	return 0;
}