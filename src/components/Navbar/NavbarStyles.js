import styled from "styled-components";

export const ContainerStyled = styled.header`
  height: 100px;
  padding: 1rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainetLogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 75px;
    height: 65px;
  }
`;

export const ContainerLinksStyled = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  a {
    padding: 1rem 1.5rem;
  }
`;

export const SpanStyled = styled.span`
  padding: 1rem 0.5rem;
  text-underline-offset: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;
