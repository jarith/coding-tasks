class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const counts = arr.reduce((acc, item) => {
            if (acc[item] === undefined) {
                acc[item] = 0
            }

            acc[item] += 1
            return acc
        }, {})

        for (let i = 0; i < arr.length; i += 1) {
            if (counts[arr[i]] > 1) {
                continue
            }

            if (k === 1) {
                return arr[i]
            }

            k -= 1
        }

        return ''
    }
}
