import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const MyMotion = ({ children, direction = "up", delay = 0.2 }) => {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default MyMotion;
