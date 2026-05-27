import React, { createContext } from "react";

export const todosContext = createContext(null);

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([
  {
    id: 1,
    todo: "Complete portfolio homepage design",
    completed: false,
  },
  {
    id: 2,
    todo: "Build responsive navbar for website",
    completed: true,
  },
  {
    id: 3,
    todo: "Add dark mode functionality",
    completed: false,
  },
  {
    id: 4,
    todo: "Create notes app UI layout",
    completed: true,
  },
  {
    id: 5,
    todo: "Setup backend API routes",
    completed: false,
  },
  {
    id: 6,
    todo: "Optimize website for mobile devices",
    completed: false,
  },
  {
    id: 7,
    todo: "Push latest code to GitHub repository",
    completed: true,
  },
  {
    id: 8,
    todo: "Fix form validation issues",
    completed: false,
  },
  {
    id: 9,
    todo: "Add animations to project cards",
    completed: true,
  },
  {
    id: 10,
    todo: "Prepare project for deployment",
    completed: false,
  },
]);

  return <todosContext.Provider value={{ todos, setTodos }}>{children}</todosContext.Provider>;
};

export default TodosProvider;
