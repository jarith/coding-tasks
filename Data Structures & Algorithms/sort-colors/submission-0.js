class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let buckets = [0, 0, 0]

        for (const num of nums) {
            buckets[num] += 1
        } 

        let i = 0
        for (let bucketI = 0; bucketI < buckets.length; bucketI += 1) {
            for (let j = 0; j < buckets[bucketI]; j += 1) {
                nums[i] = bucketI
                i += 1
            }
        }
    }
}
