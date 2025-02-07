import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/Order/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secrets from "../Pages/Shared/Secrets/Secrets";
import Dashboard from "../LayOut/Dashboard";
import Cart from "../Pages/AdminDashborad/Cart/Cart";
import AllUsers from "../Pages/AdminDashborad/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secrets",
        element: (
          <PrivateRoutes>
            <Secrets></Secrets>{" "}
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      { path: "cart", element: <Cart></Cart> },

      // admin routes
      { path: "users", element: <AllUsers></AllUsers> },
    ],
  },
]);
