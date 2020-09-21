import { useState, useEffect } from 'react';

import Board from '../Board';
import * as S from './styles';

function Game () {
    // created to store the value of Squares
    const [squaresBoard, setSquaresBoard] = useState(Array(9).fill(null));
    // check whose is the next player ('X' or 'O')
    const [xIsNext, setXIsNext] = useState(true);
    // responsible for reporting the status of the game
    const [statusGame, setStatusGame] = useState();

    function handleClick(index){
      const square = squaresBoard
      // check if there is a winner or if the Square value is already filled
      if (calculateWinner(squaresBoard) || square[index] != null) {return}
      // check who the next player is and print wour move
      square[index] = xIsNext ? 'X' : 'O'
      setSquaresBoard(square);
      // updates the status of the next player
      setXIsNext(!xIsNext);
      console.log(squaresBoard)
    }

    function resetGame() {
      setSquaresBoard(Array(9).fill(null));
      setXIsNext(true);
    }

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return (squares[a])
        }
      }
      return null;
    }

    useEffect(() => {
      const winner = calculateWinner(squaresBoard)
      if (winner) {
        setStatusGame(`${winner} is the winner`)
      } else if (squaresBoard.every(element => element != null)){
        setStatusGame('Match drawn')
      } else {
        setStatusGame(`Next Player: ${xIsNext ? 'X' : 'O'}`)
      }
    }, [xIsNext, resetGame])

    return(
      <S.Container>
        <h1>
          Tic-Tac-Toe Game
        </h1>
        <h2>
          {statusGame}
        </h2>
        <Board
          value={squaresBoard}
          onClick={(i) => handleClick(i)}
          />
        <S.Button onClick={() => resetGame()}>Reset</S.Button>
      </ S.Container>
    )
}

export default Game
