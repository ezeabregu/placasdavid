import React from "react";
import { ButtonStyled } from "./ButtonStyles";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Button = () => {
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const scrollUp = () => {
    console.log("CLick");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ButtonStyled>
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileTap={{ scale: 0.9 }}
      >
        <BsFillArrowUpCircleFill onClick={scrollUp} />
      </motion.div>
    </ButtonStyled>
  );
};

export default Button;
