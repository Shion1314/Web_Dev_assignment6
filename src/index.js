import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error_page"
import Home from "./Home"
import AuthorBooks from "./AuthorBooks"
import "./styles.css";
import { Provider } from 'react-redux';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: "Web_Dev_assignment6/",
    element: <Home/>,
    children:[
      {
      },

    ],
  errorElement: <ErrorPage/>,
  },
    
  {

    path: "Web_Dev_assignment6/author's_Book/",
    element : <AuthorBooks/>,
    errorElement: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);