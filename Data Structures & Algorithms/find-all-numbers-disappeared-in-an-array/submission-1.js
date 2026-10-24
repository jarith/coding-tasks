class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const ans = [];

        for (let i = 0; i < nums.length; i += 1) {
            let indx = Math.abs(nums[i]) - 1

            if (nums[indx] > 0) {
               nums[indx] = -nums[indx] 
            }
        }

        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] > 0) {
                ans.push(i + 1);
            }
        }

        return ans;
    }
}
