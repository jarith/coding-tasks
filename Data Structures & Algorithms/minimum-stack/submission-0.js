class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.at(-1) !== undefined) {
            this.stack.push([val, Math.min(val, this.stack.at(-1)[1])])
            return
        }

        this.stack.push([val, val])
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop()[0] 
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1)[0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.at(-1)[1]
    }
}
