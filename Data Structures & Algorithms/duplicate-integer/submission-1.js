class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mp = {}

        for (const num of nums) {
            mp[num] = mp[num] === undefined ? 1 : mp[num] + 1
            if (mp[num] > 1) {
                return true
            }
        }

        return false
    }
}
