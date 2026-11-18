class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const dp = Array.from({length: temperatures.length}, () => 0) 

        dp[dp.length - 1] = 0

        for (let i = temperatures.length - 2; i >= 0; i -= 1) {
            let j = i + 1

            while (j < temperatures.length && temperatures[j] <= temperatures[i]) {
                if (dp[j] === 0) {
                    j = temperatures.length
                    break
                }

                j += dp[j]
            }

            if (j < temperatures.length) {
                dp[i] = j - i
            }
        }

        return dp
    }
}
