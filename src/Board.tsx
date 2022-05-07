import { FC, useState } from 'react';
import Cell from './Cell';

const rowLength = 3;
const colLength = 3;

const cloneBoardState = (oldBoardState: any[][]): any[][] => {
  const newBoardState = [];

  for (let i = 0; i < rowLength; i++) {
    newBoardState.push([...oldBoardState[i]]);
  }

  return newBoardState;
}

const getCellId = (xCoor: any, yCoor: any) => ('' + xCoor + 'x' + yCoor);

const findRandomEmptyCell = (boardState: any[][]): number[] => {
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (boardState[i][j] === -1) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
};

const sleep = (x: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(0), x));
};

const Board: FC = () => {
  const matrix = [];
  const [boardState, setBoardState] = useState([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);

  const getComputerMove = (boardState: any[][]) => {
    const newBoardState = cloneBoardState(boardState);
    const coords = findRandomEmptyCell(newBoardState);

    if (coords[0] !== -1 && coords[1] !== -1) {
      newBoardState[coords[0]][coords[1]] = 'O';
    }

    return newBoardState;
  };

  const onCellClick = (xCoor: number, yCoor: number) => {
    const newBoardState = cloneBoardState(boardState);
    newBoardState[xCoor][yCoor] = 'X';
    setBoardState(newBoardState);

    sleep(1000).then(() => {
      const boardStateAfterCompMove = getComputerMove(newBoardState);
      setBoardState(boardStateAfterCompMove);
    });
  };

  for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < colLength; j++) {
        matrix.push(<Cell key={getCellId(i, j)} xCoor={i} yCoor={j} onClick={onCellClick} cellValue={boardState[i][j]}/>);
      }

      matrix.push(<br key={getCellId(i, -1)}/>);
  }
  
  return (<div className='board'>{matrix}</div>);
};

export default Board;
