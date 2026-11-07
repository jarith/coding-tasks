class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        const charsCounts = chars.split("").reduce((acc, ch) => {
            if (acc[ch] === undefined) {
                acc[ch] = 0;
            }

            acc[ch] += 1;
            return acc;
        }, {});

        return words
            .map((word) => {
                const wordCounts = word.split("").reduce((acc, ch) => {
                    if (acc[ch] === undefined) {
                        acc[ch] = 0;
                    }

                    acc[ch] += 1;
                    return acc;
                }, {});

                for (const [ch, counts] of Object.entries(wordCounts)) {
                    if (charsCounts[ch] === undefined || counts > charsCounts[ch]) {
                        return 0;
                    }
                }

                return word.length;
            })
            .reduce((acc, length) => acc + length, 0);
    }
}
