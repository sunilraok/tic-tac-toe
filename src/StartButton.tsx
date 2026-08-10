import { FC } from 'react';

export interface RestartButtonProps {
  readonly onRestart: () => void;
}

const RestartButton: FC<RestartButtonProps> = ({ onRestart }) => (
  <input type='button' className='StartButtonInput' value='Restart' onClick={onRestart}/>
);

export default RestartButton;
