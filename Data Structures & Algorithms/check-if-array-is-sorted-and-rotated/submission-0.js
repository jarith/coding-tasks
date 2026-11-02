class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        const doubleNums = [...nums, ...nums]

        const minItem = Math.min(...nums)
        const minIndex = nums.findIndex(item => item === minItem) 

        for (let i = minIndex; i < minIndex + nums.length - 1; i += 1) {
            if (doubleNums[i + 1] < doubleNums[i]) {
                return false
            }
        }

        return true
    }
}
