import Square from '../Square';
import * as S from './styles';

function Board (props) {

  const squares = props.value

  const renderSquares = squares.map((_, index) =>
    <Square
      value={squares[index]}
      onClick={() => props.onClick(index)} />
  )

  return(
    <S.Wapper>
      <S.Row>
        {renderSquares}
      </S.Row>
    </S.Wapper>
  );
}

export default Board
