class Logger {
    constructor() {
        this.cache = {}
    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        if (this.cache[message] === undefined || timestamp >= this.cache[message] + 10) {
            this.cache[message] = timestamp
            return true
        }

        return false
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
