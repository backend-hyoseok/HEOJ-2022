#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin >> n;

    int information_count[100001];
    memset(information_count, 0, sizeof(information_count));

    for (int i = 0; i < n; i++)
    {
        int k;
        cin >> k;

        for (int j = 0; j < k; j++)
        {
            int I;
            cin >> I;

            information_count[I]++;
        }
    }

    int q;
    cin >> q;

    for (int i = 0; i < q; i++)
    {
        int I;
        cin >> I;

        if (information_count[I] >= n / 2)
            cout << "Valid\n";
        else
            cout << "Invalid\n";
    }

    return 0;
}