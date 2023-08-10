import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import ResDetail from "./components/ResDetail/ResDetail";
import Header from "./components/Header/Header";
import AboutClass from "./components/About/AboutClass";

const AppLayout = () => {
  return( <div className="App">
    <Header />
    <Outlet />
  </div>)
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <AboutClass name ="Namaste React"/>,
      },
      {
        path: "/res/:id",
        element: <ResDetail />,
      },
    ],
  },
]);
// root.render(<App />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
