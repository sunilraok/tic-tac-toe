import { FC } from 'react';

export interface StartButtonProps {
  readonly onStart: () => void;
}

const StartButton: FC<StartButtonProps> = ({ onStart }) => (
  <input type='button' className='StartButtonInput' value='Start' onClick={onStart}/>
);

export default StartButton;
