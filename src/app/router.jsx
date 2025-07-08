import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/home";
import SignPage from "../pages/sign/sign";

const routers = createBrowserRouter([
  {
    path: "/GH-Power",
    element: <Home />,
  },
  {
    path: "/login",
    element: <SignPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={routers} />;
};

export default Router;
