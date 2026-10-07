class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {
        const numberCount = nums.reduce((acc, num) => {
            if (acc[num] === undefined) {
                acc[num] = 0
            }

            acc[num] += 1

            return acc
        }, {}) 

        let maxUniqueNum = -1

        for (const num of nums) {
            if (numberCount[num] > 1) {
                continue
            }

            maxUniqueNum = Math.max(maxUniqueNum, num) 
        }

        return maxUniqueNum
    }
}
