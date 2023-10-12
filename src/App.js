import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useRoutes,
} from "react-router-dom";

import "./App.css";
import "./output.css";
import { routes } from "./routes";
import { MenuBar } from "./MenuBar";
import { AnimatePresence } from "framer-motion";
import React from "react";

const router = createBrowserRouter(routes);

function App() {
  const element = useRoutes(routes);
  const location = useLocation();

  if (!element) return null;
  return (
    <div className="App">
      <MenuBar />
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </div>
  );
}

export default App;
