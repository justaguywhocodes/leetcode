var minCost = function(s, cost) {
    
    let totalTime = 0, currMaxTime = 0;
    
    for (let i = 0; i < s.length; ++i) {
        if (i > 0 && s[i] != s[i - 1]) {
            currMaxTime = 0;
        }
        
        totalTime += Math.min(currMaxTime, cost[i]);
        currMaxTime = Math.max(currMaxTime, cost[i]);
    }
    
    return totalTime;
}