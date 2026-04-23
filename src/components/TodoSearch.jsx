import styled from 'styled-components';

const StyledInputSearch = styled.input`
  border: 2px solid black;
  color: #AAAAAA;
  padding: 1.6rem 2rem;
  max-inline-size: 450px;
  inline-size: 100%;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  background-color: #FFFFFF;
  box-shadow: 0px 5px 50px 0px #20232940;
  text-align: center;
`

function TodoSearch() {
  return(
    <StyledInputSearch type="text" placeholder="Leer 10 páginas" name="search" />
  )
}

export {TodoSearch};
