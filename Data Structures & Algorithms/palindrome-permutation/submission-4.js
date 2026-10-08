class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {
        let lettersCountMap = {};

        for (const letter of s) {
            if (lettersCountMap[letter] === undefined) {
                lettersCountMap[letter] = 0;
            }

            lettersCountMap[letter] += 1;
        }

        let oddCounts = 0

        for (const letterCount of Object.values(lettersCountMap)) {
            if (letterCount % 2 !== 0) {
                oddCounts += 1
            }
        }

        return  oddCounts <= 1
    }
}
