class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let counter = 0;

        for (let i = 0; i < nums.length; i += 1) {
            for (let j = i + 1; j < nums.length; j += 1) {
                if (nums[i] === nums[j]) {
                    counter += 1
                }
            }
        }

        return counter
    }
}
