import React from "react";
import {
  HeroContainterStyled,
  HeroImageContainterStyled,
  HeroTextContainterStyled,
} from "./HeroStyles";
import heroImage from "../../img/heroImg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <HeroContainterStyled>
        <HeroTextContainterStyled>
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.5 }}
          >
            PLACAS DAVID
          </motion.h1>
          <motion.h3
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.5 }}
          >
            Placas Antihumedad
          </motion.h3>
        </HeroTextContainterStyled>
        <HeroImageContainterStyled>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={heroImage}
            alt="HeroImage"
          />
        </HeroImageContainterStyled>
      </HeroContainterStyled>
    </>
  );
};

export default Hero;
