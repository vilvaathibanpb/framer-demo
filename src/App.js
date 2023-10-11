import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { routes } from "./routes";
import { MenuBar } from "./MenuBar";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <MenuBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
