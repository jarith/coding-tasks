class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const align = n => {
            if (n < 10) {
                return `00${n}`
            }

            if (n < 100) {
                return `0${n}`
            }

            return `${n}`
        }

        return strs.reduce((acc, str) => `${acc}${align(str.length)}${str}`, '')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        
        const ans = []

        while (i < str.length) {
            const length = parseInt(`${str[i]}${str[i + 1]}${str[i + 2]}`, 10)

            let word = [] 

            i += 3

            for (let j = 0; j < length; j+= 1) {
                word.push(str[i + j])
            }

            i += length
            ans.push(word.join(''))
        }

        return ans
    }
}
    