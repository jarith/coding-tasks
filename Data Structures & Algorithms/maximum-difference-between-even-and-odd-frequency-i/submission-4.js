class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const freq = s.split("").reduce((acc, ch) => {
            if (acc[ch] === undefined) {
                acc[ch] = 0;
            }

            acc[ch] += 1;
            return acc;
        }, {});

        const [evenArr, oddArr] = Object.values(freq).reduce((acc, value) => {
            acc[value % 2 === 0 ? 0 : 1].push(value)

            return acc
        }, [[], []]);

        let ans = -100;

        for (let i = 0; i < oddArr.length; i += 1) {
            for (let j = 0; j < evenArr.length; j += 1) {
                ans = Math.max(ans, oddArr[i] - evenArr[j]);
            }
        }

        return ans;
    }
}
