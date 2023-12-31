import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { routes } from "../routes";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {routes.map((route, i) => (
      <MenuItem r={route.path} key={i} i={i} />
    ))}
  </motion.ul>
);

