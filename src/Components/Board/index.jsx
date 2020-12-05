import Square from '../Square';
import * as S from './styles';

function Board (props) {

  const squares = props.value

  return(
    <S.Wapper>
      <S.Row>
        {squares.map((value, index) =>
          <Square
            key={index}
            value={value}
            onClick={() => props.onClick(index)} />
        )}
      </S.Row>
    </S.Wapper>
  );
}

export default Board
