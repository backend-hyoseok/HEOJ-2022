#include <bits/stdc++.h>
using namespace std;
int main() {
    string e, rate;
    cin >> e >> rate;

    pair<int, pair<int, char>> count[26];
    for (int i = 0 ; i < 26 ; i++) {
        count[i] = { 0, { 100000, 'a' + i } };
    }

    for (int i = 0 ; i < e.length() ; i++) {
        count[e[i] - 'a'].first--;

        count[e[i] - 'a'].second.first = min(i, count[e[i] - 'a'].second.first);
    }

    sort(count, count + 26);

    string ans = e;
    string sortedRate = "";

    for(int i = 0 ; i < 26 ; i++) {
        int c = 0;

        vector<char> vc;
        while (i + c < 26 && count[i].first == count[i+c].first) {
            vc.push_back(rate[i+c]);
            c++;
        }

        sort(vc.begin(), vc.end());

        for (char c: vc) {
            sortedRate.push_back(c);
        }

        i += c - 1;
    }

    for(int i = 0 ; i < e.length() ; i++) {
        for(int j = 0 ; j < 26 ; j++) {
            if(e[i] == count[j].second.second) {
                ans[i] = sortedRate[j];
                break;
            }
        }
    }

    cout << ans;
	
	return 0;
}