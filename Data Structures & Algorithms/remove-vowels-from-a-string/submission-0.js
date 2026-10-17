class Solution {
    removeVowels(s) {
        const vowels = new Set([
            'a', 'e', 'i', 'o', 'u'
        ])

        return s.split('').filter(ch => !vowels.has(ch)).join('')
    }
}
