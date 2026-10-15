class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }

        const numsMap = nums.reduce((acc, num) => {
            if (acc[num] === undefined) {
                acc[num] = true;
            }

            return acc;
        }, {});

        const graph = {};

        for (const num of nums) {
            if (graph[num] !== undefined) {
                continue;
            }

            graph[num] = [];

            if (numsMap[num + 1]) {
                graph[num].push(num + 1);
            }
        }

        const used = {};

        let ans = -1;

        for (const num of nums) {
            if (used[num]) {
                continue
            }
            
            let size = 0;
            const stack = [[num, graph[num]]];

            while (stack.length > 0) {
                const [v, edges] = stack.pop();

                used[v] = true;
                size += 1;

                for (const edge of edges) {
                    stack.push([edge, graph[edge]]);
                }
            }

            ans = Math.max(ans, size);
        }

        return ans;
    }
}
