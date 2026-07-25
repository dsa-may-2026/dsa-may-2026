/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result = []

    function helper(board, row) {
        if (row == n) {
            result.push([...board]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (canIPlace(board, row, i)) {
                board.push(i);
                helper(board, row + 1);
                board.pop();
            }
        }
    }



    helper([], 0)
    return formatBoards(result);


    function canIPlace(board, row, col) {
        //colum check above
        for (let i = 0; i < row; i++) {
            if (board[i] == col) {
                return false;
            }
        }

        //left upper diagonal
        let currRow = row - 1;
        let currCol = col - 1;
        while (currRow >= 0 && currCol >= 0) {
            if (board[currRow] == currCol) {
                return false;
            }
            currRow--;
            currCol--;
        }

        //right upper diagonal
        currRow = row - 1;
        currCol = col + 1;
        while (currRow >= 0 && currCol < n) {
            if (board[currRow] == currCol) {
                return false;
            }
            currRow--;
            currCol++;
        }
    
    return true
    }

    function formatBoards(result) {
        let boards = [];

        for(let item of result) {
            //item = [3,2,1,0]
            let board = [];
            for(let i = 0; i<n; i++) {

                let row = Array(n).fill(".");
                row[item[i]] = "Q";
                board.push(row.join(""));
            }
            boards.push(board);
        }
        return boards
    }
};