class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const prefixSum = []

        for (let i = 0; i < nums.length; i += 1) {
            prefixSum.push((prefixSum[i - 1] ?? 0) + nums[i])
        }

        for (let i = 0; i < prefixSum.length; i += 1) {
            const sumLeft = prefixSum[i]
            const sumRight = prefixSum[nums.length - 1] - (prefixSum[i - 1] ?? 0)

            if (sumLeft === sumRight) {
                return i
            }
        }

        return -1
    }
}
