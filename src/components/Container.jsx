import styled from "styled-components"

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  justify-content: center;
  inline-size: 100%;
  max-inline-size: 86rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  min-block-size: 100vh;
`;

function Container({children}){
  return(
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export {Container}