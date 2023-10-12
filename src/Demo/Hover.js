import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Todo({ todo, index, removeTodo }) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      whileHover={{ scale: 1.2}}
      className="todo"
      onClick={() => removeTodo(index)}
    >
      {todo.text}
    </motion.div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function Hover() {
  const [todos, setTodos] = React.useState([
    {
      text: "Teach Framer Motion",
      isCompleted: false,
    },
    {
      text: "Show cool demos",
      isCompleted: false,
    },
    {
      text: "Speak at FrontMania",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app" style={{ scale: 2 }}>
      <div className="todo-list">
          <AnimatePresence mode="popLayout">
            {todos.map((todo, index) => (
              <Todo
                key={todo.text}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
          </AnimatePresence>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default Hover;
