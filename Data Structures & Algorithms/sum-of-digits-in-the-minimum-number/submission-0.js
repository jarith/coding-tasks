class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    sumOfDigits(nums) {
        let num = Math.min(...nums)

        let sum = 0

        while (num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }

        return sum % 2 === 0 ? 1 : 0
    }
}
