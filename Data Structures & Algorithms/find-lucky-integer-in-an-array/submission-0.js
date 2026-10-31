class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        const counts = arr.reduce((acc, num) => {
            if (!acc.has(num)) {
                acc.set(num, 0)
            }

            acc.set(num, acc.get(num) + 1)

            return acc
        }, new Map()) 

        let ans = -1

        for (const [num, freq] of counts.entries()) {
            if (num === freq) {
                ans = Math.max(ans, num)
            }
        }

        return ans
    }
}
