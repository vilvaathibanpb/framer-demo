import { motion } from "framer-motion";
import React from "react";

const Motion = () => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="title"
    >
      Welcome to FrontMania
    </motion.h1>
  );
};

export default Motion;
