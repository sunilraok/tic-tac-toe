import { FC } from 'react';
import { CellValue } from './Board.types';
import { getCellId } from './BoardUtilities';

export interface CellProps {
  readonly key: string;
  readonly xCoor: number;
  readonly yCoor: number;
  readonly cellValue: CellValue;
  readonly onClick: (xCoor: number, yCoor: number) => void;
}

const Cell: FC<CellProps> = ({ xCoor, yCoor, cellValue, onClick }) => {
  const onCellClick = () => {
    if (cellValue) {
      return;
    }

    onClick(xCoor, yCoor);
  };

  const actualCellValue = cellValue ?? '';
  const cellClassName = [
    'Cell',
    cellValue ? 'Cell-filled' : 'Cell-empty',
    cellValue === 'X' ? 'Cell-x' : '',
    cellValue === 'O' ? 'Cell-o' : '',
  ].filter(Boolean).join(' ');

  return (
    <input key={getCellId(xCoor, yCoor)} className={cellClassName} type='text' onClick={onCellClick} value={actualCellValue} readOnly={true}/>
  );
};

export default Cell;
