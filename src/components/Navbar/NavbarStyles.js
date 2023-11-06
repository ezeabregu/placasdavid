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
    height: 50px;
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
    display: block;
    .menu {
      position: fixed;
      left: -500%;
      top: 90px;
      background-color: var(--gray);
      width: 100%;
      height: 90vh;
      z-index: 999;
      text-align: center;
      transition: 0.3s;
    }
    .menu.active {
      left: 0;
    }
    a {
      margin: 3rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const LinksStyled = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
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
