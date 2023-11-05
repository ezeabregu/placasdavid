import React from "react";
import logo from "../../img/favicon.JPG";
import { motion } from "framer-motion";
import {
  ContainerStyled,
  ContainetLogoStyled,
  ContainerLinksStyled,
  SpanStyled,
  MenuContainerStyled,
  LinksStyled,
} from "./NavbarStyles";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <ContainerStyled>
      <ContainetLogoStyled>
        <a href="index">
          <img src={logo} alt="logo" />
        </a>
      </ContainetLogoStyled>
      <ContainerLinksStyled>
        <LinksStyled>
          <a href="about">
            <SpanStyled>Nosotros</SpanStyled>
          </a>
          <a href="products">
            <SpanStyled>Placas</SpanStyled>
          </a>
          <a href="contact">
            <SpanStyled>Contacto</SpanStyled>
          </a>
        </LinksStyled>
        <motion.div whileTap={{ scale: 0.95 }}>
          <MenuContainerStyled>
            <AiOutlineMenu />
          </MenuContainerStyled>
        </motion.div>
      </ContainerLinksStyled>
    </ContainerStyled>
  );
};

export default Navbar;
