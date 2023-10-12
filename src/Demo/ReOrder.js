import React from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";

function ReOrder() {
  const [todos, setTodos] = React.useState([
    "Teach Framer Motion",
    "Show cool demos",
    "Speak at FrontMania",
  ]);

  return (
        <Reorder.Group axis="y" values={todos} onReorder={setTodos}>
          {todos.map((todo, index) => (
            <Reorder.Item key={todo} value={todo} className="todo">
              {todo}
            </Reorder.Item>
          ))}
        </Reorder.Group>
  );
}

export default ReOrder;
