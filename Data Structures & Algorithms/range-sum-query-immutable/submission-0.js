class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefixSum = []

        for (let i = 0; i < nums.length; i += 1) {
            this.prefixSum.push((this.prefixSum[i - 1] ?? 0) + nums[i])
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.prefixSum[right] - (this.prefixSum[left - 1] ?? 0)
    }
}
