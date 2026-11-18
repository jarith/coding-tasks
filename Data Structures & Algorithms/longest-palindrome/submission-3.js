class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const counts = s.split("").reduce((acc, ch) => {
            if (acc[ch] === undefined) {
                acc[ch] = 0;
            }

            acc[ch] += 1;
            return acc;
        }, {});

        const ans = Object.values(counts).reduce(
            (acc, count) => acc + count + (count % 2 === 0 ? 0 : -1),
            0,
        );

        return ans < s.length ? ans + 1 : ans;
    }
}
