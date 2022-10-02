/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */

var numRollsToTarget = function(dice, faces, target) {
    let dp = new Array(dice + 1).fill(0).map(() => new Array(target + 1).fill(0));
    dp[0][0] = 1;
    for (let i = 1; i <= dice; i++) {
        for (let j = 1; j <= target; j++) {
            for (let k = 1; k <= faces && k <= j; k++) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % 1000000007;
            }
        }
    }
    return dp[dice][target];
};