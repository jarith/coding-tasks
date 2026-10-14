class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const ans = []

        for (let i = 0; i < words.length; i += 1) {
            for (let j = 0; j < words.length; j += 1) {
                if (i === j) {
                    continue
                }
                
                if (words[j].includes(words[i])) {
                    ans.push(words[i])
                    break
                }
            }
        }

        return ans
    }
}
