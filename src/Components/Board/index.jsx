import Square from '../Square';
import * as S from './styles';

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
        <S.Wapper>
            <S.Row>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </S.Row>
            <S.Row>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </S.Row>
            <S.Row>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </S.Row>
        </S.Wapper>
    );
}

export default Board
