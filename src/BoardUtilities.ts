import { BoardState, CellValue } from "./Board.types";
import { colLength, rowLength } from "./BoardConfig";

const getWinner = (playerCharacter: CellValue) => {
    if (playerCharacter === 'X') {
        return 'user';
    } else if (playerCharacter === 'O') {
        return 'computer';
    }

    return undefined;
}

export const checkIfAPlayerWon = (boardState: BoardState) => {
    for (let row = 0; row < rowLength; row++) {
        if (boardState[row][0] && boardState[row][0] === boardState[row][1] && boardState[row][1] === boardState[row][2]) {
            return getWinner(boardState[row][0]);
        }
    }

    for (let col = 0; col < colLength; col++) {
        if (boardState[0][col] && boardState[0][col] === boardState[1][col] && boardState[1][col] === boardState[2][col]) {
            return getWinner(boardState[0][col]);
        }
    }

    if (boardState[0][0] && boardState[0][0] === boardState[1][1] && boardState[1][1] === boardState[2][2]) {
        return getWinner(boardState[0][0]);
    }

    if (boardState[0][2] && boardState[0][2] === boardState[1][1] && boardState[1][1] === boardState[2][0]) {
        return getWinner(boardState[0][2]);
    }

    return undefined;
}

export const findRandomEmptyCell = (boardState: BoardState): number[] => {
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (boardState[i][j] === undefined) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
};

export const cloneBoardState = (oldBoardState: BoardState): BoardState => {
  const newBoardState = [];

  for (let i = 0; i < rowLength; i++) {
    newBoardState.push([...oldBoardState[i]]);
  }

  return newBoardState;
}

export const getCellId = (xCoor: number, yCoor: number) => ('' + xCoor + 'x' + yCoor);
