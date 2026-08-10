import { FC } from "react";
import Board from "./Board";

const TicTacToe: FC = () => (
  <div className="GameCard">
    <h1 className="Title">Tic Tac Toe</h1>
    <Board />
  </div>
);

export default TicTacToe;
