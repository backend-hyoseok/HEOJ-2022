#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin >> n;

    string pub[n];
    for(int i = 0 ; i < n ; i++) {
        cin >> pub[i];
    }

    int m;
    cin >> m;

    string sub[m];
    for(int i = 0 ; i < m ; i++) {
        cin >> sub[i];
    }

    int k;
    cin >> k;

    vector<pair<string, int>> sub_messages[m];

    for (int i = 0 ; i < k ; i++) {
        string subscriber, message;
        cin >> subscriber >> message;

        for (int j = 0 ; j < m ; j++) {
            if (subscriber == sub[j]) sub_messages[j].push_back({ message, i });
        }
    }

    int q;
    cin >> q;

    for (int i = 0 ; i < q ; i++) {
        string publisher, message;
        cin >> publisher >> message;

        vector<pair<int, string>> queue;

        for (int j = 0 ; j < m ; j++) {
            for (int k = 0 ; k < sub_messages[j].size() ; k++) {
                if (message == sub_messages[j][k].first) {
                    queue.push_back({ sub_messages[j][k].second, sub[j] });
                }
            }
        }

        sort(queue.begin(), queue.end());

        for (int j = 0 ; j < queue.size() ; j++) {
            cout << queue[j].second << ' ' << publisher << ' ' << message << '\n';
        }
    }
	
	return 0;
}