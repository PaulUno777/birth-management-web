import { createBrowserRouter } from "react-router";
import App from "../App";
import PrivateLayout from "../layouts/PrivateLayout";
import { Declaration } from "../pages/Declaration";
import { ErrorPage } from "../ErrorPage";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "private",
        element: <PrivateLayout />,
        children: [
          {
            path: "declarations",
            element: <Declaration />,
          },
        ],
      },
    ],
  },
]);
