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

        const [evenArr, oddArr] = Object.values(freq).reduce(
            (acc, value) => {
                acc[value % 2 === 0 ? 0 : 1].push(value);

                return acc;
            },
            [[], []],
        );

        const maxOdd = Math.max(...oddArr);
        const minEven = Math.min(...evenArr);

        return maxOdd - minEven;
    }
}
