class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let sCurrent = 0

        for (let i = 0; i < t.length; i += 1) {
            if (t[i] === s[sCurrent]) {
                sCurrent += 1
            }
        }

        return sCurrent === s.length
    }
}
