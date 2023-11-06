import React, { useState } from "react";
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
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <ContainerStyled>
      <ContainetLogoStyled>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </ContainetLogoStyled>
      <ContainerLinksStyled>
        <motion.div whileTap={{ scale: 0.95 }}>
          <MenuContainerStyled>
            <div onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
              <div className={click ? "menu active" : "menu"}>
                <a href="#about" onClick={closeMenu}>
                  Nosotros
                </a>
                <a href="#products" onClick={closeMenu}>
                  Placas
                </a>
                <a href="#contact" onClick={closeMenu}>
                  Contacto
                </a>
              </div>
            </div>
          </MenuContainerStyled>
        </motion.div>
        <LinksStyled>
          <a href="#about">
            <SpanStyled>Nosotros</SpanStyled>
          </a>
          <a href="#products" onClick={closeMenu}>
            <SpanStyled>Placas</SpanStyled>
          </a>
          <a href="#contact" onClick={closeMenu}>
            <SpanStyled>Contacto</SpanStyled>
          </a>
        </LinksStyled>
      </ContainerLinksStyled>
    </ContainerStyled>
  );
};

export default Navbar;
