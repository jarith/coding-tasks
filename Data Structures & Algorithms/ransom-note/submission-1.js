class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const ransomLetters = ransomNote.split("").reduce((acc, ch) => {
            if (acc[ch] === undefined) {
                acc[ch] = 0;
            }

            acc[ch] += 1;
            return acc;
        }, {});

        for (const ch of magazine) {
            if (ransomLetters[ch] !== undefined) {
                ransomLetters[ch] -= 1;
            }
        }

        return Object.values(ransomLetters).every((count) => count <= 0);
    }
}
