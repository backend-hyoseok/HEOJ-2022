#include <bits/stdc++.h>
using namespace std;
int main() {
    string s;
    cin >> s;

    bool ans = true;
    for (int i = 0 ; i < s.length() ; i++) {
        if (s[i] >= 'a' && s[i] <= 'z') continue;
        if (s[i] >= 'A' && s[i] <= 'Z') continue;
        if (s[i] >= '0' && s[i] <= '9') continue;

        ans = false;
    }

    if (ans) cout << "YES\n";
    else cout << "NO\n";
	
	return 0;
}