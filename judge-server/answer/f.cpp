#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin >> n;
    
    vector<int> a(n);

    for (int i = 0 ; i < n ; i++) cin >> a[i];

    int q;
    cin >> q;

    bool isRemove[n];
    memset(isRemove, 0, sizeof(isRemove));

    for (int i = 0 ; i < q ; i++) {
        int l, r;
        cin >> l >> r;

        vector<int> newA;
        
        for (int j = 0 ; j < a.size() ; j++) {
            if (j >= l - 1 && j <= r - 1) continue;

            newA.push_back(a[j]);
        }

        a = newA;
    }

    for(int i = 0 ; i < a.size() ; i++) {
        cout << a[i] << ' ';
    }
	
	return 0;
}