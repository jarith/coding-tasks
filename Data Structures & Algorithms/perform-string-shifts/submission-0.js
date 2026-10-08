class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */
    stringShift(s, shift) {
        let leftShiftsAmount = 0;
        let rightShiftsAmount = 0;

        for (const [direction, amount] of shift) {
            if (direction === 0) {
                leftShiftsAmount += amount;
            } else {
                rightShiftsAmount += amount;
            }
        }

        if (rightShiftsAmount === leftShiftsAmount) {
            return s;
        }

        const totalShift = Math.abs(rightShiftsAmount - leftShiftsAmount) % s.length;
        const direction = rightShiftsAmount > leftShiftsAmount ? 1 : 0;

        const doubleS = `${s}${s}`;

        return direction === 1
            ? doubleS.slice(s.length - totalShift, 2 * s.length - totalShift)
            : doubleS.slice(totalShift, s.length + totalShift);
    }
}
