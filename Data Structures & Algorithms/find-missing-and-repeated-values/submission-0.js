class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const n = grid.length

        const used = Array.from({length: n*n}, () => 0)

        for (let i = 0; i < n; i += 1) {
            for (let j = 0; j < n; j += 1) {
                used[grid[i][j] - 1] += 1
            }
        }

        const ans = [0, 0]

        for (let i = 0; i < used.length; i += 1) {
            if (used[i] === 2) {
                ans[0] = i + 1
            }

            if (used[i] === 0) {
                ans[1] = i + 1
            }
        } 

        return ans
    }
}
