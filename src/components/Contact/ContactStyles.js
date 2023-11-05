import styled from "styled-components";

export const ContactContainterStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 50px 0;
  border-radius: 5px;
  gap: 30px;
  max-width: 1300px;
  background-color: #e2e2e2;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactTextContainterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  h3 {
    color: #131415;
    font-size: 3rem;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const TextContainerStyled = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  li {
    color: #131415;
  }
  a {
    color: #131415;
  }
  div {
    color: #131415;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  @media (max-width: 768px) {
    div {
      font-size: 0.9rem;
    }
  }
`;

export const ContactImageContainterStyled = styled.div`
  width: 40%;
  img {
    width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 10px 20px;
  }
`;
