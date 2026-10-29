class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        const words = s.split(' ')

        if (pattern.length !== words.length) {
            return false 
        }

        const mappingA = new Map()
        const mappingB = new Map() 

        for (let i = 0; i < pattern.length; i += 1) {
            if (!mappingA.has(pattern[i])) {
                mappingA.set(pattern[i], words[i])
            }
        }

        for (let i = 0; i < words.length; i += 1) {
            if (!mappingB.has(words[i])) {
                mappingB.set(words[i], pattern[i])
            }
        }

        const mappedS = pattern.split('').map(ch => mappingA.get(ch)).join(' ')
        const mappedPattern = words.map(word => mappingB.get(word)).join('')

        return mappedS === s && mappedPattern === pattern 
    }
}
