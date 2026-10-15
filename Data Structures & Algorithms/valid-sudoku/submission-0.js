class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i += 1) {
            const used = new Set()

            for (let j = 0; j < board[i].length; j += 1) {
                if (board[i][j] === '.') {
                    continue
                }

                if (used.has(board[i][j])) {
                    return false
                }

                used.add(board[i][j])
            }
        }

        for (let i = 0; i < board.length; i += 1) {
            const used = new Set()

            for (let j = 0; j < board[i].length; j += 1) {
                if (board[j][i] === '.') {
                    continue
                }

                if (used.has(board[j][i])) {
                    return false
                }

                used.add(board[j][i])
            }
        }

        for (let i = 0; i < board.length; i += 3) {
            for (let j = 0; j < board[i].length; j += 3) {
                const used = new Set()

                for (let di = 0; di < 3; di += 1) {
                    for (let dj = 0; dj < 3; dj += 1) {
                        if (board[i + di][j + dj] === '.') {
                            continue
                        }
                        
                        if (used.has(board[i + di][j + dj])) {
                            return false
                        }

                        used.add(board[i + di][j + dj])
                    }
                }
            }
        }

        return true
    }
}
