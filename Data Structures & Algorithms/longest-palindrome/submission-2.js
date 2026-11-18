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

        let ans = 0;

        for (const count of Object.values(counts)) {
            const sum = count + (count % 2 === 0 ? 0 : -1);

            ans += sum;
        }

        return ans < s.length ? ans + 1 : ans;
    }
}
