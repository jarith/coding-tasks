class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const st = new Set(nums)

        const ans = []

        for (let i = 1; i <= nums.length; i += 1) {
            if (st.has(i)) {
                continue
            }

            ans.push(i)
        }

        return ans
    }
}
