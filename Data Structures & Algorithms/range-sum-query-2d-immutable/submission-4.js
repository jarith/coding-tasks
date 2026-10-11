class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const n = matrix.length;
        const m = matrix[0].length;

        this.sumMatrix = new Array(n);

        for (let i = 0; i < n; i += 1) {
            this.sumMatrix[i] = new Array(m).fill(0);
        }

        for (let i = 0; i < n; i += 1) {
            this.sumMatrix[i][0] += (this.sumMatrix[i - 1]?.[0] ?? 0) + matrix[i][0];
        }

        for (let j = 1; j < m; j += 1) {
            this.sumMatrix[0][j] += (this.sumMatrix[0][j - 1] ?? 0) + matrix[0][j];
        }

        for (let i = 1; i < n; i += 1) {
            for (let j = 1; j < m; j += 1) {
                this.sumMatrix[i][j] =
                    this.sumMatrix[i - 1][j] +
                    this.sumMatrix[i][j - 1] +
                    matrix[i][j] -
                    this.sumMatrix[i - 1][j - 1];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return (
            this.sumMatrix[row2][col2] -
            (this.sumMatrix[row1 - 1]?.[col2] ?? 0) -
            (this.sumMatrix[row2][col1 - 1] ?? 0) +
            (this.sumMatrix[row1 - 1]?.[col1 - 1] ?? 0)
        );
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
