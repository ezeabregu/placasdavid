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
  @media (max-width: 768px) {
    img {
      width: 50px;
      height: 50px;
    }
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
  @media (max-width: 768px) {
    padding: 0 0;
  }
`;

export const MenuContainerStyled = styled(ContainerLinksStyled)`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const LinksStyled = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SpanStyled = styled.span`
  padding: 1rem 0.5rem;
  text-underline-offset: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;
