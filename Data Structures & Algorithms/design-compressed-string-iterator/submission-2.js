class StringIterator {
    /**
     * @param {string} compressedString
     */
    constructor(compressedString) {
        this.pointer = 0 

        this.strData = []

        for (let ch of compressedString) {
            if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
                this.strData.push([ch, 0])
                continue
            }

            const digit = parseInt(ch, 10)
            this.strData.at(-1)[1] = this.strData.at(-1)[1] * 10 + digit
        }
    }

    /**
     * @return {character}
     */
    next() {
        if (!this.hasNext()) {
            return ' '
        }

        this.strData[this.pointer][1] -= 1
        const value = this.strData[this.pointer][0]

        if (this.strData[this.pointer][1] === 0) {
            this.pointer += 1
        }

        return value 
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.pointer < this.strData.length
    }
}

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
