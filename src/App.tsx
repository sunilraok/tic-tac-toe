import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <TicTacToe />
    </div>
  );
}

export default App;
