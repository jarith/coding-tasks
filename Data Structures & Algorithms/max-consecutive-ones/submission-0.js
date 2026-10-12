class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxNum = 0
        let currentNum = 0 

        for (const bit of nums) {
            if (bit === 1) {
                currentNum += 1
                continue
            }

            maxNum = Math.max(maxNum, currentNum)
            currentNum = 0
        }

        return Math.max(maxNum, currentNum)
    }
}
