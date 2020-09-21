import { useState, useEffect } from 'react';

import Board from '../Board';
import * as S from './styles';

function Game () {
    // state created to store the value of Squares
    const [squaresBoard, setSquaresBoard] = useState(Array(9).fill(null));
    // state created to check whose is the move ('X' or 'O')
    const [xIsNext, setXIsNext] = useState(true);
    // state created to check status of the game
    const [statusGame, setStatusGame] = useState('Next Player: X');

    function handleClick(index){
      const square = squaresBoard
      // check to the value of the array object is null
      if (calculateWinner(squaresBoard) || square[index] != null) {return}
      // check who the next player is and print wour move
      square[index] = xIsNext ? 'X' : 'O'
      setSquaresBoard(square);
      // updates the status of the next player
      setXIsNext(!xIsNext);
    }

    function resetSquares() {
      setSquaresBoard(Array(9).fill(null));
      setXIsNext(true);
      setStatusGame('Next Player: X')
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
      } else if (xIsNext === true) {
        setStatusGame('Next Player: X')
      } else if (xIsNext === false) {
        setStatusGame('Next Player: O')
      }
    }, [xIsNext])

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
        <S.Button onClick={() => resetSquares()}>Reset</S.Button>
      </ S.Container>
    )
}

export default Game
