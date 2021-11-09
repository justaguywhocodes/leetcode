// Time complexity: O(n)
// Space complexity: O(1)

class Solution {
public:
    int shortestDistance(vector<string>& wordsDict, string word1, string word2) {
      int dist = INT_MAX;
      
      for (int i = 0, index1 = -1, index2 = -1; i < wordsDict.size(); ++i) {
        if (wordsDict[i] == word1) {
          index1 = i;
        } else if (wordsDict[i] == word2) {
          index2 = i;          
        }
        
        if (index1 != -1 && index2 != -1) {
          dist = min(dist, abs(index1 - index2));
        }
      }
      return dist;
    }
};