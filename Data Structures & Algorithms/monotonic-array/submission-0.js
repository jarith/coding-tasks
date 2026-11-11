class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        if (nums.length === 1) {
            return true
        }

        let isIncreasing = nums[0] <= nums[1]

        for (let i = 0; i < nums.length - 1; i += 1) {
            if (isIncreasing && (nums[i] > nums[i + 1])) {
                return false
            }

            if (!isIncreasing && (nums[i] < nums[i + 1])) {
                return false
            }
        }

        return true
    }
}
