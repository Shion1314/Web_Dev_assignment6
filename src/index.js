import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import "./styles.css";
import ErrorPage from "./error_page";
import AuthorBooks from "./search";
import Home from "./Home";
import RandomBooks from "./RandomBooks";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
