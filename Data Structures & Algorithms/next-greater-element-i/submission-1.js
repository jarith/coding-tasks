class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const dp = nums2.reduce((acc, num) => {
            acc[num] = -1;
            return acc;
        }, {});

        for (let i = nums2.length - 2; i >= 0; i--) {
            if (nums2[i] < nums2[i + 1]) {
                dp[nums2[i]] = nums2[i + 1];
                continue;
            }

            let k = dp[nums2[i + 1]];

            while (nums2[i] >= k && k !== -1) {
                k = dp[k];
            }

            dp[nums2[i]] = k;
        }

        return nums1.map((num) => dp[num]);
    }
}
