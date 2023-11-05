import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  p,
  span {
    color: #131415;
    font-weight: 800;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    p {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;
