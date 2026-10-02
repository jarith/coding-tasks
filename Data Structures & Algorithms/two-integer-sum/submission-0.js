class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i += 1) {
            for (let j = i + 1; j < nums.length; j += 1) {
                if (nums[j] === target - nums[i]) {
                    return [i, j]
                }
            }
        }

        return [nums.length - 2, nums.length - 1]
    }
}
