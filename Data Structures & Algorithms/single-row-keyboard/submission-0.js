class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard, word) {
        let ans = 0
        let fingerPos = 0

        for (const letter of word) {
            for (let i = 0; i < keyboard.length; i += 1) {
                if (keyboard[i] === letter) {
                    ans += Math.abs(fingerPos - i)
                    fingerPos = i
                    break
                }
            }
        }

        return ans
    }
}
