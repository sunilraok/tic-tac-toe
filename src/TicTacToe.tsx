import { FC } from "react";
import Board from "./Board";

const TicTacToe: FC = () => (
  <>
    <h3>Tic Tac Toe</h3>
    <div className="TicTacToe">
      <Board />
    </div>
  </>
);

export default TicTacToe;
