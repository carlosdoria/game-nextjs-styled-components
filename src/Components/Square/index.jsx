import * as S from './styles'

function Square (props) {
  return(
    <S.Button onClick={props.onClick}>
      {props.value}
    </S.Button>
  )
}

export default Square
