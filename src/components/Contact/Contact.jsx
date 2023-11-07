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
import { motion } from "framer-motion";

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
              <AiFillPhone size={30} color="#131415" />
              011-3158-1752
            </div>
            <div>
              <AiOutlineWhatsApp size={30} color="#075e54" />
              +5491131581752
            </div>
            <div>
              <AiFillMail size={30} color="#131415" />
              alejandro.tonchuk2012@hotmail.com
            </div>
            <div>
              <p>Seguinos</p>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/placasdavid/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="blank"
              >
                <AiFillInstagram size={50} color="#833ab4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/Placasdavid/"
                target="blank"
              >
                <AiFillFacebook size={50} color="#1877f2" />
              </motion.a>
            </div>
          </TextContainerStyled>
        </ContactTextContainterStyled>
      </ContactContainterStyled>
    </>
  );
};

export default Contact;
