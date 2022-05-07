import { FC } from 'react';

export interface CellProps {
  readonly key: string;
  readonly xCoor: number;
  readonly yCoor: number;
  readonly cellValue: any;
  readonly onClick: (xCoor: number, yCoor: number) => void;
}

const getCellId = (xCoor: any, yCoor: any) => ('' + xCoor + 'x' + yCoor);

const Cell: FC<CellProps> = ({ xCoor, yCoor, cellValue, onClick }) => {
  const onCellClick = () => {
    onClick(xCoor, yCoor);
  };

  const actualCellValue = cellValue === -1 ? '' : cellValue;

  return (
    <input key={getCellId(xCoor, yCoor)} className='cell' type='text' onClick={onCellClick} value={actualCellValue} readOnly={true}/>
  );
};

export default Cell;
