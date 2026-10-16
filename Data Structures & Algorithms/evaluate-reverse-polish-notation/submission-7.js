class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        const ops = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };

        for (const token of tokens) {
            if (ops[token] === undefined) {
                stack.push(parseInt(token, 10));
                continue;
            }

            const b = stack.pop();
            const a = stack.pop();

            stack.push(ops[token](a, b));
        }

        return stack.pop();
    }
}
