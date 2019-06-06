/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

    // loop through first row
    // toggle piece
    // check for row conflict
      // if there is a row conflict, untoggle, get next row and set column--
    // check for column conflicts
      // if there is a column conflict, untoggle, column++, and keep the row (no change)

  var board = new Board({'n':n});
  var solution = [];
  var row = 0;
  var col = 0;

  while (row < n && col < n) {
    board.togglePiece(row, col); // place the first piece

    if (board.hasRowConflictAt(row)) {
      board.togglePiece(row, col);   // untoggle
      row++;
      col--;
    }

    if (board.hasColConflictAt(col)) {
      board.togglePiece(row, col);
      col++;
    }
      
    if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(col)){
      col++;
    }
  }

  // push each row into the solution array (loop over n)
  for (var i = 0; i < n; i++) {
    solution.push(board.get(i));
  }
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
