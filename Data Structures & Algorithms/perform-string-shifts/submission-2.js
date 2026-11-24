class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */
    stringShift(s, shift) {
        let netShifts = 0;

        for (const [direction, amount] of shift) {
            netShifts = direction === 1 ? netShifts - amount : netShifts + amount;
        }

        if (netShifts === 0) {
            return s;
        }

        netShifts %= s.length;

        const doubleS = `${s}${s}`;

        return netShifts < 0
            ? doubleS.slice(s.length + netShifts, 2 * s.length + netShifts)
            : doubleS.slice(netShifts, s.length + netShifts);
    }
}
