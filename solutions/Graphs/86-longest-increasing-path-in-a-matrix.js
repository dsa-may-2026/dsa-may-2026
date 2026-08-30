var longestIncreasingPath = function (matrix) {
    let dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]]

    let dp = {}

    function dfs(i, j) {
        if(dp[i+","+j]!=undefined) {
            return dp[i+","+j]
        }
        let max = 0;
        for (let [di, dj] of dirs) {
            let nextI = i + di
            let nextJ = j + dj
            if (
            nextI >= 0 && nextI < matrix.length && nextJ >= 0 && nextJ < matrix[0].length
                    && matrix[nextI][nextJ] > matrix[i][j]) {
                max = Math.max(max, dfs(nextI, nextJ ));
            }
        }
        dp[i+","+j] = max + 1
        return dp[i+","+j]
    }
    let max = -1
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            max = Math.max(max, dfs(i, j))
        }
    }
    return max
};