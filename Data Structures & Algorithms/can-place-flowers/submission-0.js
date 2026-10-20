class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        for (let i = 0; i < flowerbed.length && n > 0; i += 1) {
            if (flowerbed[i] === 0 && (flowerbed[i - 1] ?? 0) === 0 && (flowerbed[i + 1] ?? 0) === 0) {
                flowerbed[i] = 1
                n -= 1
            }
        }

        return n === 0
    }
}
