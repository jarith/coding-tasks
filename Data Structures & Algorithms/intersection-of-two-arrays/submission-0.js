class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const st1 = new Set(nums1)
        const st2 = new Set(nums2)

        return Array.from(st1.intersection(st2))
    }
}
