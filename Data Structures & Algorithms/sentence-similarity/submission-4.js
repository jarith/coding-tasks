class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    areSentencesSimilar(sentence1, sentence2, similarPairs) {
        if (sentence1.length !== sentence2.length) {
            return false
        }

        const similarPairsMap = similarPairs.reduce((acc, [x, y]) => {
            if (acc[x] === undefined) {
                acc[x] = []
            }

            if (acc[y] === undefined) {
                acc[y] = []
            }

            acc[x].push(y)
            acc[y].push(x)

            return acc
        }, {})

        const st = new Set(sentence2)

        for (const word of sentence1) {
            const isSimilar = similarPairsMap[word]?.some(pair => st.has(pair))

            if (!isSimilar && !st.has(word)) {
                return false
            } 
        }


        return true
    }
}
