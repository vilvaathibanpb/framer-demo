import { motion } from "framer-motion";
import React from "react";

const h1Variant = {
  initial: { opacity: 0 },
  final: { opacity: 1 },
};

const spanVariant = {
  initial: { opacity: 0 },
  final: { opacity: 1, transition: { duration: 5 } },
};
const Variants = () => {
  return (
    <motion.h1
      initial="initial"
      animate="final"
      transition={{ duration: 2 }}
      variants={h1Variant}
      className="title"
    >
      Welcome to{" "}
      <motion.span variants={spanVariant}>
        FrontMania
      </motion.span>
    </motion.h1>
  );
};

export default Variants;
