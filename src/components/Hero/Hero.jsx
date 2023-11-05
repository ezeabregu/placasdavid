import React from "react";
import {
  HeroContainterStyled,
  HeroImageContainterStyled,
  HeroTextContainterStyled,
} from "./HeroStyles";
import heroImage from "../../img/heroImg.jpg";

const Hero = () => {
  return (
    <>
      <HeroContainterStyled>
        <HeroTextContainterStyled>
          <h1>PLACAS DAVID</h1>
          <h3>Placas Antihumedad</h3>
        </HeroTextContainterStyled>
        <HeroImageContainterStyled>
          <img src={heroImage} alt="HeroImage" />
        </HeroImageContainterStyled>
      </HeroContainterStyled>
    </>
  );
};

export default Hero;
