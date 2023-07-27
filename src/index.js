import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import ResDetail from "./components/ResDetail/ResDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error />
  },
  {
    path: "/about", 
    element: <About />,
  },
  {
    path: "/res",
    element: <ResDetail />,
  },
]);
// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
