class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let counter = 0

        for (const str of details) {
            const age = parseInt(`${str.at(-4)}${str.at(-3)}`, 10)

            if (age > 60) {
                counter += 1
            }
        }

        return counter
    }
}
