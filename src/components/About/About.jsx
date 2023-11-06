import React from "react";
import {
  AboutContainterStyled,
  AboutImageContainterStyled,
  AboutTextContainterStyled,
} from "./AboutStyles";
import aboutImage from "../../img/aboutImage.jpeg";
import antesImage from "../../img/antes.jpeg";
import despuesImage from "../../img/despues.jpeg";

const About = () => {
  return (
    <>
      <AboutContainterStyled id="about">
        <AboutImageContainterStyled>
          <img src={aboutImage} alt="AboutImage" />
        </AboutImageContainterStyled>
        <AboutTextContainterStyled>
          <h3>
            ¡Con <b>PLACAS DAVID</b> decile chau a la humedad!
          </h3>
          <p>
            Nos encargamos de solucionar tus problemas de humedad. Olvidate de
            romper las paredes, trabajamos con la tecnología de microevaporacion
            para darle una solución definitiva y en tan sólo 24 horas. Nuestras
            placas son fabricadas con yeso cerámico de 1° calidad y secadas a
            horno. Contactanos por Whatsapp para más información y te pasamos el
            presupuesto en el día.
          </p>
        </AboutTextContainterStyled>
      </AboutContainterStyled>
      <AboutContainterStyled>
        <AboutImageContainterStyled>
          <h2>Antes</h2>
          <img src={antesImage} alt="AboutImage" />
        </AboutImageContainterStyled>
        <AboutImageContainterStyled>
          <h2>Después</h2>
          <img src={despuesImage} alt="AboutImage" />
        </AboutImageContainterStyled>
      </AboutContainterStyled>
    </>
  );
};

export default About;
