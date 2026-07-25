
var totalNQueens = function (n) {

    function helper(board, row) {
        if (row == n) {
            return 1;
        }

        let count = 0;

        for (let i = 0; i < n; i++) {
            if (canIPlace(board, row, i)) {
                board.push(i);
                count+= helper(board, row + 1);
                board.pop();
            }
        }
        return count;
    }



    return helper([], 0)


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

  
};