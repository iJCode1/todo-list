import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  inline-size: 100%;
`;

function TodoList(props) {
  return(
    <StyledUl>
      {props.children}
    </StyledUl>
  )
}

export {TodoList};
