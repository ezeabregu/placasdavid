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

  const logoVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  const linksVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <ContainerStyled>
      <ContainetLogoStyled>
        <a href="/">
          <motion.img
            src={logo}
            alt="logo"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          />
        </a>
      </ContainetLogoStyled>
      <ContainerLinksStyled>
        <motion.div whileTap={{ scale: 0.95 }}>
          <MenuContainerStyled>
            <div onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
              <div className={click ? "menu active" : "menu"}>
                <a href="about" onClick={closeMenu}>
                  Nosotros
                </a>
                <a href="products" onClick={closeMenu}>
                  Placas
                </a>
                <a href="contact" onClick={closeMenu}>
                  Contacto
                </a>
              </div>
            </div>
          </MenuContainerStyled>
        </motion.div>
        <LinksStyled>
          <motion.div
            variants={linksVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SpanStyled>Nosotros</SpanStyled>
            </motion.a>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SpanStyled>Placas</SpanStyled>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SpanStyled>Contacto</SpanStyled>
            </motion.a>
          </motion.div>
        </LinksStyled>
      </ContainerLinksStyled>
    </ContainerStyled>
  );
};

export default Navbar;
