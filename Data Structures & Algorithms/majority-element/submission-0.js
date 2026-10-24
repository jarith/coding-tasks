class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const counts = nums.reduce((acc, num) => {
            if (acc[num] === undefined) {
                acc[num] = 0
            }

            acc[num] += 1
            return acc 
        }, {}) 

        let maxCount = -1
        let ans = nums[0]

        for (const [num, count] of Object.entries(counts)) {
            if (count > maxCount) {
                maxCount = count
                ans = num
            }
        }

        return ans
    }
}
