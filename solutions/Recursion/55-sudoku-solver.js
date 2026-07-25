/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

    function helper() {
        let foundADot = false;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") {
                    for (let num = 1; num <= 9; num++) {
                        if (canIFill(i, j, num)) {
                            board[i][j] = String(num);

                            if (helper()) return true;

                            board[i][j] = ".";
                        }
                    }

                    return false;
                }
            }
        }
        return foundADot != true
    }

    function canIFill(row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[i][col] == num) {
                return false
            }
            if (board[row][i] == num) {
                return false
            }
        }

        //inner square
        let startRow = Math.floor((row / 3)) * 3;
        let startCol = Math.floor((col / 3)) * 3;

        for (let row = startRow; row <= startRow + 2; row++) {
            for (let col = startCol; col <= startCol + 2; col++) {
                if (board[row][col] == num) {
                    return false;
                }
            }
        }
        return true
    }

    helper();

};