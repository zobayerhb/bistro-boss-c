import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Page not pound</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
