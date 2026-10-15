class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (const op of operations) {
            if (op === "+") {
                stack.push(stack.at(-1) + stack.at(-2));
                continue;
            }

            if (op === "D") {
                stack.push(2 * stack.at(-1));
                continue;
            }

            if (op === "C") {
                stack.pop();
                continue;
            }

            stack.push(parseInt(op, 10));
        }

        return stack.reduce((acc, item) => acc + item, 0);
    }
}
