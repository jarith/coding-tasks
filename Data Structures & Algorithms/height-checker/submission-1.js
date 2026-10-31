class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const expected = heights.toSorted((a, b) => a - b)

        let ans = 0

        for (let i = 0; i < heights.length; i += 1) {
            if (expected[i] !== heights[i]) {
                ans += 1
            }
        }

        return ans
    }
}
