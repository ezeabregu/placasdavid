import React from "react";
import logo from "../../img/favicon.JPG";
import {
  ContainerStyled,
  ContainetLogoStyled,
  ContainerLinksStyled,
  SpanStyled,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <ContainerStyled>
      <ContainetLogoStyled>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </ContainetLogoStyled>
      <ContainerLinksStyled>
        <a href="about">
          <SpanStyled>Nosotros</SpanStyled>
        </a>
        <a href="products">
          <SpanStyled>Placas</SpanStyled>
        </a>
        <a href="contact">
          <SpanStyled>Contacto</SpanStyled>
        </a>
      </ContainerLinksStyled>
    </ContainerStyled>
  );
};

export default Navbar;
