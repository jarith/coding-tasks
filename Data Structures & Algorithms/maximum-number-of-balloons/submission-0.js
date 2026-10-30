class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const counts = {
            'b': 0,
            'a': 0,
            'l': 0,
            'o': 0,
            'n': 0
        }

        for (const ch of text) {
            if (counts[ch] !== undefined) {
                counts[ch] += 1
            }
        }

        counts['l'] = Math.floor(counts['l'] / 2)
        counts['o'] = Math.floor(counts['o'] / 2)

        return Math.min(...Object.values(counts))
    }
}
