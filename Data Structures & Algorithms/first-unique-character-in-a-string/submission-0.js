class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const counts = s.split('').reduce((acc, ch) => {
            if (acc[ch] === undefined) {
                acc[ch] = 0
            }

            acc[ch] += 1
            return acc
        }, {})

        for (let i = 0; i < s.length; i += 1) {
            if (counts[s[i]] === 1) {
                return i
            }
        }

        return -1
    }
}
