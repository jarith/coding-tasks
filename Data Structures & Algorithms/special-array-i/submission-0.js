class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        for (let i = 0; i < nums.length - 1; i += 1) {
            if (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) {
                return false
            }

            if (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0) {
                return false
            }
        }

        return true
    }
}
