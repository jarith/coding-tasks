class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        return s.trim().split(/\s+/).at(-1).length
    }
}
