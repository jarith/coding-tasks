class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        if (rowIndex === 0) {
            return [1];
        }

        let curRow = [1];
        let prevRow = this.getRow(rowIndex - 1);

        for (let i = 1; i < rowIndex; i++) {
            curRow.push(prevRow[i - 1] + prevRow[i]);
        }

        curRow.push(1);

        return curRow;
    }
}
