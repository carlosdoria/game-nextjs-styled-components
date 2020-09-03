import { useState } from 'react';

import Board from '../Board';

function Game () {
    // state created to store the value of Squares
    const [squaresBoard, setSquaresBoard] = useState(Array(9).fill(null));
    // state created to check whose is the move ('X' or 'O')
    const [xIsNext, setXIsNext] = useState(true);
    const [statusGame, setStatusGame] = useState('Next Player: X');

    function handleClick(index){
        const square = squaresBoard
        // if created to check if the value of the array object is null
        if (square[index] != null) {return}
        square[index] = xIsNext ? 'X' : 'O'
        if (squaresBoard.every(element => element != null)){
            setStatusGame('Match drawn')
        } else if (xIsNext === true) {
            setStatusGame('Next Player: O')
        } else if (xIsNext === false) {
            setStatusGame('Next Player: X')
        }
        setSquaresBoard(square);
        setXIsNext(!xIsNext);
    }

    function resetSquares() {
        setSquaresBoard(Array(9).fill(null));
        setXIsNext(true);
        setStatusGame('Next Player: X')
    }
    
    return(
        <div>
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
            <button onClick={() => resetSquares()}>Reset</button>
        </ div>
    )
}

export default Game