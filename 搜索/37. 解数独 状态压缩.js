/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  new Sudoku(board).solve();
};

class Sudoku {
  constructor(board) {
    this.board = board;
    //行
    this.rows = new Array(9).fill(0);
    //列
    this.columns = new Array(9).fill(0);
    //3x3方格
    this.boxs = Array.from({ length: 3 }, () => new Array(3).fill(0));
    //未填空格
    this.emptyCells = new Set();
  }
  solve() {
    //初始化已知的数字
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let num = this.board[i][j];
        if (num !== ".") {
          //将数字转化为二进制标记
          //1 -> 0b1, 2 -> 0b10, 3 -> 0b100, 4 -> 0b1000 ...
          const sign = 1 << (Number(num) - 1);
          this.rows[i] |= sign;
          this.columns[j] |= sign;
          this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] |= sign;
        } else {
          this.emptyCells.add((i << 4) | j);
        }
      }
    }
    //主逻辑
    return this.fillNext();
  }
  fillNext() {
    let cellInfo = this.getEmptyCell();
    if (cellInfo === null) {
      //没有空格，解题成功
      return true;
    }
    let [i, j, possible] = cellInfo;
    while (possible) {
      //截取其中一个可能性
      const sign = -possible & possible;
      //填入空格
      this.fillCell(i, j, sign);
      //继续下一个填充
      if (this.fillNext()) {
        //填充成功
        return true;
      } else {
        //排除当前数字
        possible ^= sign;
        //清空空格
        this.cleanCell(i, j, sign);
      }
    }
    //穷尽所有可能性，回溯
    return false;
  }
  getEmptyCell() {
    let min = 10;
    let cellInfo = null;
    for (const id of this.emptyCells) {
      const i = id >> 4, j = id & 0b1111;
      const possible = this.getCellPossible(i, j);
      const count = this.countPossible(possible);
      if (min > count) {
        //挑选可能性最少的格子，理论上可减少犯错回溯
        cellInfo = [i, j, possible];
        min = count;
      }
    }
    return cellInfo;
  }
  countPossible(possible) {
    //计算二进制 1 的数量
    let count = 0;
    while (possible) {
      possible &= (possible - 1);
      count++;
    }
    return count;
  }
  fillCell(i, j, sign) {
    //对应位变成1，标记占用
    this.rows[i] |= sign;
    this.columns[j] |= sign;
    this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] |= sign;
    //填入空格
    this.emptyCells.delete((i << 4) | j);
    this.board[i][j] = String(Math.log2(sign) + 1);
  }
  cleanCell(i, j, sign) {
    //对应位变为0，清除占用
    this.rows[i] &= ~sign;
    this.columns[j] &= ~sign;
    this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] &= ~sign;
    //清空格子
    this.emptyCells.add((i << 4) | j)
    this.board[i][j] = ".";
  }
  getCellPossible(i, j) {
    //获取格子可能的取值，二进制1表示可选
    return (this.rows[i] | this.columns[j] | this.boxs[Math.floor(i / 3)][Math.floor(j / 3)]) ^ 0b111111111;
  }
}
console.log(solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));