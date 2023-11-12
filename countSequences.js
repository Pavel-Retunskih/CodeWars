function countSequences(n) {
let dp = new Array(n+1).fill(0)
console.log(dp);
for (let i = 2; i <=n; i++) {
    for (let j = 1; j <=i/2; j++) {
        dp[i]+=dp[j]        
        }
        dp[i]++
    }
    return dp[n]
}

console.log(countSequences(18))