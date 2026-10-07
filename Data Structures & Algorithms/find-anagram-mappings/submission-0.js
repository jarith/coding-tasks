class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        const mapping = []

        for (let i = 0; i < nums1.length; i += 1) {
            for (let j = 0; j < nums2.length; j += 1) {
                if (nums2[j] === nums1[i]) {
                    mapping.push(j)
                    break
                }
            }
        }

        return mapping
    }
}
