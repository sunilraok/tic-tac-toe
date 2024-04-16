import { FC, useState } from 'react';
import { BoardState } from './Board.types';
import { colLength, rowLength } from './BoardConfig';
import { checkIfAPlayerWon, cloneBoardState, findRandomEmptyCell, getCellId } from './BoardUtilities';
import Cell from './Cell';
import StartButton from './StartButton';

const sleep = (x: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(0), x));
};

const defaultBoardState = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ];

const Board: FC = () => {
  const [boardState, setBoardState] = useState<BoardState>(defaultBoardState);
  const [winner, setWinner] = useState('');
  const [editable, setEditable] = useState(true);

  const getComputerMove = (boardState: BoardState) => {
    const newBoardState = cloneBoardState(boardState);
    const coords = findRandomEmptyCell(newBoardState);

    if (coords[0] !== -1 && coords[1] !== -1) {
      newBoardState[coords[0]][coords[1]] = 'O';
    }

    return newBoardState;
  };

  const onCellClick = (xCoor: number, yCoor: number) => {
    if (!editable) {
      return;
    }

    const newBoardState = cloneBoardState(boardState);
    newBoardState[xCoor][yCoor] = 'X';
    setBoardState(newBoardState);
    const winner = checkIfAPlayerWon(newBoardState);
    if (winner) {
        setWinner(winner);
        setEditable(false);
        return;
    }


    sleep(100).then(() => {
      const boardStateAfterCompMove = getComputerMove(newBoardState);
      setBoardState(boardStateAfterCompMove);
      const winner = checkIfAPlayerWon(boardStateAfterCompMove);
      if (winner) {
        setWinner(winner);
        setEditable(false);
        return;
      }
    });
  };

  const onStart = () => {
    const newBoardState = cloneBoardState(defaultBoardState);
    setBoardState(newBoardState);
    setWinner('');
    setEditable(true);
  };

  const matrix = [];
  for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < colLength; j++) {
        matrix.push(<Cell key={getCellId(i, j)} xCoor={i} yCoor={j} onClick={onCellClick} cellValue={boardState[i][j]}/>);
      }

      matrix.push(<br key={getCellId(i, -1)}/>);
  }

  return (<>
    <div className='Board'>{matrix}</div>
    <div className='StartButton'>
      <StartButton onStart={onStart} />
    </div>
    <div className='WinnerMessage'>
      {!!winner ? <div><b>Winner:</b> {winner}</div> : <><br/></>}
    </div>
    </>);
};

export default Board;
