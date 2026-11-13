class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        let coord = [0, 0]

        const steps = {
            'N': [-1, 0],
            'S': [1, 0],
            'W': [0, -1],
            'E': [0, 1] 
        }

        const visited = new Set([
            [0, 0].join(',')
        ])

        for (const direction of path) {
            coord = [coord[0] + steps[direction][0], coord[1] + steps[direction][1]]

            const coordHash = coord.join(',')

            if (visited.has(coordHash)) {
                return true
            }

            visited.add(coordHash)
        }

        return false
    }
}
