class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const N = nums.length / 2

        const countsMap = nums.reduce((acc, num) => {
            if (acc[num] === undefined) {
                acc[num] = 0
            }

            acc[num] += 1
            return acc
        }, {}) 

        const counts = Object.values(countsMap)

        return counts.every(item => item % 2 == 0)
    }
}
