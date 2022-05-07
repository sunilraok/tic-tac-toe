import { FC } from 'react';
import Cell from './Cell';

const rowLength = 3;
const colLength = 3;

const Board: FC = () => {
  const matrix = [];

  for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < colLength; j++) {
        matrix.push(<Cell />);
      }
      matrix.push(<br />);
  }
  
  return (<div>{matrix}</div>);
};

export default Board;
