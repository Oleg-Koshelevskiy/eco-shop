"use client";

import { motion } from "framer-motion";
import { BtnProps } from "@/types";

const Button = (props: BtnProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type={props.type || "button"}
      className={`btn ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
