import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ResDetail from "./components/ResDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About name="Namaste React" />,
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
