import styled from 'styled-components';

const StyledH1 = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: normal;
  font-size: 2.4rem;
  margin-block-start: 7rem;

  > span{
    font-weight: bold;
  }
`

function TodoCounter({ completed = 0, total = 0 }) {
  return(
    <StyledH1>Has completado <span>{completed}</span> de <span>{total}</span> TODOS</StyledH1>
  )
}

export {TodoCounter};
