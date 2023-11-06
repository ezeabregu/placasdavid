import React from "react";
import {
  ContactContainterStyled,
  ContactImageContainterStyled,
  ContactTextContainterStyled,
  TextContainerStyled,
} from "./ContactStyles";
import contactImage from "../../img/contact.JPG";
import {
  AiFillPhone,
  AiFillMail,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <ContactContainterStyled id="contact">
        <ContactImageContainterStyled>
          <a href="https://maps.app.goo.gl/vFjmdfUKWYuLDJtx5" target="blank">
            <img src={contactImage} alt="ContactImage" />
          </a>
        </ContactImageContainterStyled>
        <ContactTextContainterStyled>
          <h3>Contactate con nosotros</h3>
          <TextContainerStyled>
            <div>
              <AiFillPhone />
              011-3158-1752
            </div>
            <div>
              <AiOutlineWhatsApp />
              +5491131581752
            </div>
            <div>
              <AiFillMail />
              alejandro.tonchuk2012@hotmail.com
            </div>
            <div>
              <p>Seguinos</p>
              <a
                href="https://www.instagram.com/placasdavid/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="blank"
              >
                <AiFillInstagram />
              </a>
              <a href="https://www.facebook.com/Placasdavid/" target="blank">
                <AiFillFacebook />
              </a>
            </div>
          </TextContainerStyled>
        </ContactTextContainterStyled>
      </ContactContainterStyled>
    </>
  );
};

export default Contact;
