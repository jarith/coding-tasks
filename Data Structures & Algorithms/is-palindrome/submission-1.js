class Solution {
    isAlphanumeric(ch) {
        return (ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9");
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        const lowerS = s.toLowerCase()

        while (left < right) {
            const leftCh = lowerS[left]
            const rightCh = lowerS[right]

            if (!this.isAlphanumeric(leftCh)) {
                left += 1;
                continue
            }

            if (!this.isAlphanumeric(rightCh)) {
                right -= 1;
                continue
            }

            if (leftCh !== rightCh) {
                return false;
            }

            left += 1;
            right -= 1;
        }

        return true;
    }
}
