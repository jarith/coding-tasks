class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const brackets = {
            "(": ")",
            "[": "]",
            "{": "}",
        };

        for (const bracket of s) {
            if (brackets[bracket] !== undefined) {
                stack.push(bracket);
                continue;
            }

            if (brackets[stack.at(-1)] !== bracket) {
                return false;
            }

            stack.pop();
        }

        return stack.length === 0;
    }
}
