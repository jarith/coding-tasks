class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        const allowedSet = new Set(allowed.split(""));

        return words.filter((word) => word.split("").every((ch) => allowedSet.has(ch))).length;
    }
}
