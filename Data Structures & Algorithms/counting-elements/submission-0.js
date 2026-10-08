class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        let ans = 0

        for (let i = 0; i < arr.length; i += 1) {
            if (arr.includes(arr[i] + 1)) {
                ans += 1
            }
        }

        return ans
    }
}
