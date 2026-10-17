class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isDecomposable(s) {
        if ((s.length - 2) % 3 !== 0) {
            return false
        }

        let hasTwoLengthSplit = false

        for (let i = 0; i < s.length;) {
            if (s[i] === s[i + 1] && s[i + 1] === s[i + 2]) {
                i += 3
                continue
            }

            if (s[i] === s[i + 1]) {
                if (hasTwoLengthSplit) {
                    return false
                }    

                hasTwoLengthSplit = true
                i += 2
                continue
            }

            return false
        }

        return true
    }
}
