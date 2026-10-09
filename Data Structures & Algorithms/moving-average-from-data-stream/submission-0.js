class MovingAverage {
    /**
     * @param {number} size
     */
    constructor(size) {
        this.values = [];
        this.pointer = 0;
        this.size = size;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        this.values.push(val);

        if (this.values.length > this.size) {
            this.pointer += 1;
        }

        let sum = 0;
        for (let i = this.pointer; i < this.values.length; i += 1) {
            sum += this.values[i];
        }

        return sum / Math.min(this.values.length, this.size);
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */
