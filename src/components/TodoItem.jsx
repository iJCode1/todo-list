import styled from "styled-components";
import checkGreyIcon from "../assets/check-grey-icon.svg";
import checkGreenIcon from "../assets/check-green-icon.svg";
import deleteIcon from "../assets/delete-icon.svg";

const StyledLi = styled.li`
  background-color: #FAFAFA;
  padding-block: 2.8rem;
  padding-inline: 2.4rem;
  box-shadow: 0px 5px 50px 0px #20232926;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-radius: 1.2rem;

  > p{
    font-size: 1.8rem;
  }

  .check-icon,
  .delete-icon{
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    transition: transform .5s ease; 

    &:active{
      transform: scale(.8);
    }
  }

  .check-icon{
    /* background-image: ${({$completeGreyIcon}) => $completeGreyIcon ? `url("${$completeGreyIcon}")` : ""}; */
    background-image: ${({$completeGreenIcon, $completeGreyIcon, $completed}) => $completed ? `url("${$completeGreenIcon}")` : `url("${$completeGreyIcon}")` }
  }

  .delete-icon{
    width: 3rem;
    height: 3rem;
    top: -15px;
    right: 5px;
    position: absolute;
    background-image: ${({ $deleteIcon }) => $deleteIcon ? `url("${$deleteIcon}")` : "none"};
  }

  .todo-completed{
    text-decoration: line-through;
  }
`

function TodoItem({ todo, completed }) {
  return(
    <StyledLi $deleteIcon={deleteIcon} $completeGreyIcon={checkGreyIcon} $completeGreenIcon={checkGreenIcon} $completed={completed}>
      <i className="check-icon" />
      <p className={`${completed && 'todo-completed'}`}>{todo}</p>
      <i className="delete-icon" />
    </StyledLi>
  )
}

export {TodoItem};
