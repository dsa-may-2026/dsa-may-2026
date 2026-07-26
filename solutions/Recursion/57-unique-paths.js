/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    function helper(i,j, map) {
        if(map[i+","+j] != undefined) {
            return map[i+","+j]
        }

        if(i == m-1 && j == n-1) {
            return 1;
        }
        if(i == m || j == n) {
            return 0;
        }


        map[i+","+j] = helper(i,j+1, map) + helper(i+1, j, map)

        return map[i+","+j]
    }

    return helper(0,0, {})
};