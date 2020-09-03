import { useState } from 'react';

import Square from '../Square'

function Board (props) {
    function renderSquare (i) {
            return(
                <Square 
                    value={props.value[i]}
                    onClick={() => props.onClick(i)}
                />
            );
    }

    return(
        <div>
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board

{/* <>
<div>
    <Square onClick={() => props.click(0)} value={props.valueSquare[0]}/>
    <Square onClick={() => props.click(1)} value={props.valueSquare[1]}/>
    <Square onClick={() => props.click(2)} value={props.valueSquare[2]}/>
</div>
<div>
    <Square />
    <Square />
    <Square />
</div>
<div>
    <Square />
    <Square />
    <Square />
</div>
</> */}