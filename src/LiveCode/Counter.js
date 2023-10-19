import React from "react";
import { motion } from "framer-motion";

// counter component

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div className="counter">
      <motion.p
        key={count}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="title"
      >
        {count}
      </motion.p>
      <div
        onClick={increment}
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          color: "white",
          border: "2px solid white",
          fontSize: "28px",
          margin: "10px",
          cursor: "pointer"
        }}
      >
        +
      </div>
    </div>
  );
};

export default Counter;
