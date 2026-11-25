class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const ans = []

        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] !== val) {
                ans.push(nums[i])
            }
        }


        for (let i = 0; i < ans.length; i += 1) {
            nums[i] = ans[i]
        }

        return ans.length
    }
}
