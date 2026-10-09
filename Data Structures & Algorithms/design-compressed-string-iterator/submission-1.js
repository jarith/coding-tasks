class StringIterator {
    /**
     * @param {string} compressedString
     */
    constructor(compressedString) {
        this.pointer = 0 
        this.emittedCount = 0

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
        if (this.emittedCount === this.strData[this.pointer][1]) {
            this.pointer += 1   
            this.emittedCount = 0
        }

        this.emittedCount += 1

        if (this.pointer === this.strData.length) {
            return ' '
        }

        return this.strData[this.pointer][0] 
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
