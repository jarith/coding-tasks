class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names, heights) {
        return names
            .map((name, i) => [name, heights[i]])
            .sort((a, b) => b[1] - a[1])
            .map(([name]) => name);
    }
}
