class Solution {
    getHash(str) {
        const hash = new Array(26).fill(0)
        const base = 'a'.charCodeAt(0)

        for (let ch of str) {
            hash[ch.charCodeAt(0) - base] += 1;
        }

        return hash.join(',')
    }

    groupAnagrams(strs) {
        const groups = {}

        for (let i = 0; i < strs.length; i += 1) {
            const str = strs[i]
            const hash = this.getHash(str) 

            if (groups[hash] === undefined) {
                groups[hash] = [str]
                continue
            }

            groups[hash].push(str)
        }

        return Object.values(groups)
    }
}
