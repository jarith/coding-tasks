class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    confusingNumber(n) {
        const nStr = String(n)
        
        let flippedN = ''

        const flipMap = {
            '0': '0',
            '1': '1',
            '6': '9',
            '8': '8',
            '9': '6'
        }

        for (let i = 0; i < nStr.length; i += 1) {
            const flippedDigit = flipMap[nStr[i]]

            if (flippedDigit === undefined) {
                return false
            }
            
            flippedN = `${flippedN}${flippedDigit}`
        }

        return nStr !== [...flippedN].reverse().join('')
    }
}
