import styled from "styled-components";

export const HeroContainterStyled = styled.section`
  height: calc(80vh - 100px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  gap: 30px;
  max-width: 1300px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroTextContainterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  h1 {
    font-size: 5rem;
    margin: 10px 0;
  }
  h3 {
    font-size: 2rem;
    margin: 10px 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

export const HeroImageContainterStyled = styled.div`
  width: 40%;
  img {
    width: 100%;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    width: 90%;
    img {
      width: 100%;
      margin-bottom: 50px;
    }
  }
`;
