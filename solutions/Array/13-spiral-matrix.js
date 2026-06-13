/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (mat) {
    let directions = [[0,1], [1,0], [0,-1], [-1, 0]]
    let directionIndex = 0

    let rowStart = 0;
    let colStart = 0;
    let rowEnd = mat.length-1;
    let colEnd = mat[0].length-1;
    let i = 0, j = 0;

    let ans = []

    while (ans.length< mat.length*mat[0].length) {
        ans.push(mat[i][j]);

        if (j == colEnd && directionIndex == 0) {
            directionIndex = (directionIndex + 1) % 4
            rowStart++
        }
        else if (i == rowEnd && directionIndex == 1) {
            directionIndex = (directionIndex + 1) % 4
            colEnd--
        }
        else if (j == colStart && directionIndex == 2) {
            directionIndex = (directionIndex + 1) % 4
            rowEnd--
        }
        else if (i == rowStart && directionIndex == 3) {
            directionIndex = (directionIndex + 1) % 4
            colStart++
        }

        [iInc, jInc] = directions[directionIndex]
        i = i + iInc;
        j = j + jInc;

    }

    return ans;
};