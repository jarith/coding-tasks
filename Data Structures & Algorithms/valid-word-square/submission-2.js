class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        for (let i = 0; i < words.length; i += 1) {
            for (let j = 0; j < words[i].length; j += 1) {
                const isInvalidOnColumn =
                    words[i]?.[j] === undefined && words[j]?.[i] !== undefined;
                    
                const isInvalidOnRow = words[i]?.[j] !== undefined && words[j]?.[i] === undefined;

                if (isInvalidOnColumn || isInvalidOnRow) {
                    return false;
                }

                if (words[i][j] !== words[j][i]) {
                    return false;
                }
            }
        }

        return true;
    }
}
