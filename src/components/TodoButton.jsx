import styled from "styled-components";
import CrosIcon from "../assets/cross-icon.svg";
import deleteIcon from "../assets/delete-icon.svg";

const StyledButton = styled.button`
  background-color: #61DAFA;
  width: 6.4rem;
  height: 6.4rem;
  font-size: 4rem;
  box-sizing: border-box;
  border-radius: 50%;
  border: none;
  justify-content: center;
  display: flex;
  align-items: center;
  position: absolute;
  right: 2.4rem;
  bottom: 2.4rem;
  cursor: pointer;
  transition: transform .5s;
  box-shadow: 0px 5px 25px 0px #61DAFA80;
  outline: none;

  &:active{
    transform: scale(.9);
  }
`;

function TodoButton() {
  return(
    <StyledButton $deleteIcon={deleteIcon}>
      <img src={CrosIcon} alt="Cross Icon" />
    </StyledButton>
  )
}

export {TodoButton};
