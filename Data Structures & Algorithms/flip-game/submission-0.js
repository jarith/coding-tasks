class Solution {
    generatePossibleNextMoves(currentState) {
        let ans = [];

        for (let i = 0; i < currentState.length - 1; i += 1) {
            if (currentState[i] === "+" && currentState[i + 1] === "+") {
                const copy = currentState.split('')
                copy[i] = '-' 
                copy[i + 1] = '-'
                ans.push(copy.join(''))
            }
        }

        return ans;
    }
}
