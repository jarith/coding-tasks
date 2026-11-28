class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isConsecutive(nums) {
        const st = new Set(nums);

        if (st.size < nums.length) {
            return false;
        }

        const minNum = Math.min(...nums);

        for (let i = minNum; i < minNum + nums.length; i += 1) {
            if (!st.has(i)) {
                return false;
            }
        }

        return true;
    }
}
