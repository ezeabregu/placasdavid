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
              <motion.a
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                href="tel:1131581752"
              >
                <AiFillPhone size={30} color="#131415" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/5491131581752"
                target="_blanck"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp size={30} color="#075e54" />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.4 }}
                href="mailto:alejandro.tonchuk2012@hotmail.com?body=Enviar información sobre las placas."
              >
                <AiFillMail size={30} color="#131415" />
              </motion.a>
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
