import styled from "styled-components";

export const AboutContainterStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  padding: 30px 10px;
  gap: 30px;
  border-radius: 5px;
  max-width: 1300px;
  background-color: #e2e2e2;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutTextContainterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  h3 {
    color: #131415;
    font-size: 1.6rem;
    margin: 10px 0;
  }
  p {
    color: #131415;
    font-size: 1.2rem;
    margin: 10px 0;
    line-height: 1.8rem;
    text-align: justify;
  }
  @media (max-width: 768px) {
    width: 90%;
    padding: 0 20px;
    h3 {
      text-align: center;
      font-size: 1.7rem;
    }
    p {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

export const AboutImageContainterStyled = styled.div`
  width: 40%;
  img {
    width: 100%;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
