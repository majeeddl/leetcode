export const isValidSudoku = (board: string[][]): boolean => {
  const cols = {};
  const rows = {};

  const squares = {};

  const validRow = (board, row, col, value) => {
    for (let j = 0; j < 8; j++) {
      if (j !== col) {
        if (board[row][j] === value) {
          return false;
        }
      }
    }

    return true;
  };

  const validColumn = (board, row, col, value) => {
     for (let i = 0; i < 8; i++) {
       // check if the current row matches the passed in row
       if (i !== row) {
         if (board[i][col] === value) {
           return false;
         }
       }
     }

     return true;
  };

  const validBox = (board, row, col, value)=> {
    const startRow = row - (row % 3),
      startCol = col - (col % 3);

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (i !== row && j !== col) {
          if (board[i][j] === value) {
            return false;
          }
        }
      }
    }

    return true;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {

      // const value = board[i][j];
      // if (value !== ".") {
      //   if (
      //     !validRow(board, i, j, value) ||
      //     !validColumn(board, i, j, value) || !validBox(board, i, j, value)
      //   ) {
      //     return false;
      //   }
      // }

      const value = board[i][j];

      const q = (i % 3) + "_" + (j % 3);

      if (value == ".") {
        continue;
      }

      if (!rows[i]) {
        rows[i] = [];
      }

      if (!cols[j]) {
        cols[j] = [];
      }
      if (!squares[q]) {
        squares[q] = [];
      }

      if (
        rows[i].includes(value) ||
        cols[j].includes(value) ||
        squares[q].includes(value)
      ) {
        // return false;
      }

      rows[i].push(value);
      cols[j].push(value);
      squares[q].push(value);
    }
  }


  return true;
};
