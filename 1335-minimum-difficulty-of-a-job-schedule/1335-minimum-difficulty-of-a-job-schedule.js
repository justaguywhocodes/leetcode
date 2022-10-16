/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
   const n = jobDifficulty.length;
  if (n < d) return -1;
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(d + 1).fill(Infinity));
  dp[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= d; j++) {
      let max = 0;
      for (let k = i; k >= 1; k--) {
        max = Math.max(max, jobDifficulty[k - 1]);
        dp[i][j] = Math.min(dp[i][j], dp[k - 1][j - 1] + max);
      }
    }
  }
  return dp[n][d];
};