class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const mapping = {};
        const used = new Set();

        let result = [];

        for (let i = 0; i < s.length; i += 1) {
            if (mapping[s[i]] === undefined) {
                if (used.has(t[i])) {
                    return false;
                }

                mapping[s[i]] = t[i];
                used.add(t[i]);
            }

            result.push(mapping[s[i]]);
        }

        return result.join("") === t;
    }
}
