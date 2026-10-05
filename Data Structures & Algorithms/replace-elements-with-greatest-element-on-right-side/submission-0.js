class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxElem = arr[arr.length - 1]
        arr[arr.length - 1] = -1

        for (let i = arr.length - 2; i >= 0; i -= 1) {
            if (arr[i] < maxElem) {
                arr[i] = maxElem
                continue
            }

            let tmp = arr[i]
            arr[i] = maxElem
            maxElem = tmp
        }

        return arr
    }
}
