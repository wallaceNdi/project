/*const printBoard = board => {
  console.log('current board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};


const board = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']
];

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);*/

class game{
  constructor( numberOfRows, numberOfColumns, numberOfBombs){
    this._board = new Board( numberOfRows, numberOfColumns,numberOfBombs);
  }
  playMove(rowIndex,columnIndex){
    this._board.flipTile(rowIndex,columnIndex)
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        console.log('game over');
        this._board.print() } else if(this._board.hasSafeTiles()){
          console.log('current board: ');
            this._board.print();
      }else {
        console.log('congratulation you won');
      this._board.print();
      }
  }
};

class Board{
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
  this._numberOfBombs = numberOfBombs;
  this._numberOfTiles = numberOfRows * numberOfColumns;
  this._playerBoard = Board.generatePlayerBoard(numberOfRows , numberOfColumns);
  this._bombBoard = Board.generateBombBoard(numberOfRows , numberOfColumns,numberOfBombs);
  }
  get playerBoard(){
    return this._playerBoard;
  }
   flipTile(rowIndex,columnIndex){
    if (playerBoard[rowIndex][columnIndex] !== ' ') {
     console.log('This tile has already been flipped!');
      return;
      if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
      } else {this._playerBoard[rowIndex][columnIndex] =
         this.getNumberOfNeighborBombs(rowIndex,columnIndex);}
    }
  numberOfTiles --};
  getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex){
    const neighborOffsets = [
    [-1,0],
    [-1,-1],
    [0,-1],
    [1,0],
    [1,-1],
    [0,-1],
    [1,1],
    [-1,1]
  ];
  const numberOfRows = this._bombBoard.length;
  const numberOfColumns =this._bombBoard[0].length;

  let numberOfBombs = 0;
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows
    && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
    if(this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B'){ numberOfBombs++;}
    }
  });
  return numberOfBombs;
  }
//  getNumberOfNeighborBombs(this._rowIndex,this._columnIndex);
  hasSafeTiles(){
    return this._numberOfTiles !== this._numberOfBombs;
  }
  print(){
  console.log(this._board.map(row => row.join(' | ')).join('\n'));
  };

  static generatePlayerBoard(numberOfRows,numberOfColumns){
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row =[];
    for (columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
  };
  static generateBombBoard(numberOfRows,numberOfColumns,numberOfBombs){
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row =[];
      for (columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row.push(null);
      }
      board.push(row);
    }
};
const numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomcolumnsIndex = Math.floor(Math.random() * numberOfColumns);
  if(board[randomRowIndex][randomcolumnsIndex] !=='B'){
    board[randomRowIndex][randomcolumnsIndex] = 'B';
    numberOfBombsPlaced++
    }
}
  return board;
};


const g = new Game(3,3,3);
g.playMove(0,0)
