import { motion } from "framer-motion";
import React from "react";

const KeyFrame = () => {
  return (
    <motion.h1
      animate={{ scale: [0.8, 1, 1.2, 0.9, 1.1, 1] }}
      transition={{ duration: 2 }}
      className="title"
    >
      Welcome to FrontMania
    </motion.h1>
  );
};

export default KeyFrame;
