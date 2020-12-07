import { useState, useEffect } from 'react';

import * as S from './styles';

function Game() {
  // created to store the value of Squares
  const [squaresBoard, setSquaresBoard] = useState(Array(9).fill(null));
  // save play history
  const [playHistory, setPlayHistory] = useState([]);
  // check whose is the next player ('X' or 'O')
  const [xIsNext, setXIsNext] = useState(true);
  // responsible for reporting the status of the game
  const [statusGame, setStatusGame] = useState('');
  const [winner, setWinner] = useState(false);

  function handleClick(index: number) {
    const square = squaresBoard;
    // check if there is a winner or if the Square value is already filled
    if (square[index] != null || winner) {
      return;
    }
    // check who the next player is and print wour move
    square[index] = xIsNext ? 'X' : 'O';
    // save current move in history. Slice was used so that state 'playHistory' did not keep updating the 'square' within it
    setPlayHistory([...playHistory, square.slice()]);
    // updates the status of the next player
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquaresBoard(Array(9).fill(null));
    setPlayHistory([]);
    setXIsNext(true);
    setWinner(false);
  }

  function verifyWinner(squares: string[]) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(true);
        return squares[a];
      }
    }
    return null;
  }

  function returnMove(index: number) {
    const move = playHistory;
    setSquaresBoard(move[index]);
    console.log('rodei');
  }

  useEffect(() => {
    const IS_WINNER = verifyWinner(squaresBoard);

    if (IS_WINNER) {
      setStatusGame(`${IS_WINNER} is the winner`);
    } else if (squaresBoard.every(element => element != null)) {
      setStatusGame('Match drawn');
    } else {
      setStatusGame(`Next Player: ${xIsNext ? 'X' : 'O'}`);
    }
  }, [xIsNext, squaresBoard]);

  return (
    <S.Container>
      <S.Title>Tic-Tac-Toe Game</S.Title>
      <h2>{statusGame}</h2>
      <S.Board>
        <S.Row>
          {squaresBoard.map((value, index) => (
            <S.Square key={index} onClick={() => handleClick(index)}>
              {value}
            </S.Square>
          ))}
        </S.Row>
      </S.Board>
      {playHistory.map((_, index) => (
        <button key={index} onClick={() => returnMove(index)}>
          Jogada #{index + 1}
        </button>
      ))}
      <S.Button onClick={() => resetGame()}>Reset</S.Button>
      <S.Button onClick={() => console.log(squaresBoard)}>
        Show Squares
      </S.Button>
      <S.Button onClick={() => console.log(playHistory)}>Show history</S.Button>
    </S.Container>
  );
}

export default Game;
