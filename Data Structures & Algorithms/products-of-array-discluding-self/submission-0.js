class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixMult = []
        const postfixMult = []

        for (let i = 0; i < nums.length; i += 1) {
            prefixMult.push((prefixMult[i - 1] ?? 1) * nums[i])
        }

        for (let i = 0; i < nums.length; i += 1) {
            postfixMult.push((postfixMult[i - 1] ?? 1) * nums[nums.length - i - 1])
        }

        const ans = []

        for (let i = 0; i < nums.length; i += 1) {
            ans.push((prefixMult[i - 1] ?? 1) * (postfixMult[postfixMult.length - i - 2] ?? 1))
        }

        return ans
    }
}
