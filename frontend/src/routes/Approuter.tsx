import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../auth/login";
import Register from "../auth/register";
import Outlets from "./Outlet";

const Approuter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlets />,
      children: [
        {
          index:true,
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approuter;
