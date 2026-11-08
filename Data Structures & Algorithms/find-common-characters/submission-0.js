class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    commonChars(words) {
        const wordsSets = words.map(word => {
            return word.split('').reduce((acc, ch) => {
                if (acc[ch] === undefined) {
                    acc[ch] = 0
                }

                acc[ch] += 1
                return acc
            }, {})
        })

        let shortestWord = words[0] 

        for (const word of words) {
            if (word.length < shortestWord.length) {
                shortestWord = word
            }
        }

        return shortestWord.split('').reduce((acc, ch) => {
            const isAppeardInAllStrings = wordsSets.every(wSet => wSet[ch] !== undefined && wSet[ch]--)

            if (isAppeardInAllStrings) {
                acc.push(ch)
            }

            return acc
        }, [])
    }
}
