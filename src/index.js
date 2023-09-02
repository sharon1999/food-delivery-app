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
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
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
        element: <AboutClass name="Namaste React" />,
      },
      {
        path: "/res/:id",
        element: <ResDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
// root.render(<App />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
