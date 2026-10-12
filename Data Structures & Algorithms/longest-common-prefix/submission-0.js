class Solution {
    isCommonPrefix(strs, prefix) {
        return strs.every(str => str.startsWith(prefix))
    }

    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let possiblePrefix = ''
        let minStrLength = 1000 

        for (const str of strs) {
            if (str.length < minStrLength) {
                possiblePrefix = str
                minStrLength = str.length
            }
        }

        for (let i = possiblePrefix.length; i > 0; i -= 1) {
            const prefix = possiblePrefix.slice(0, i)

            if (this.isCommonPrefix(strs, prefix)) {
                return prefix
            }
        }

        return ''
    }
}
