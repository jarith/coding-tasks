class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const countsMap = nums.reduce((acc, num) => {
            if (acc[num] === undefined) {
                acc[num] = 0
            }

            acc[num] += 1
            return acc
        }, {}) 

        return Object.values(countsMap).every(item => item % 2 == 0)
    }
}
