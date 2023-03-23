import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/Home/SIgn/Home";
import CheckOut from "../components/Packages/CheckOut";
import Packages from "../components/Packages/Packages";
import Profile from "../components/Profile/Profile";
import Login from "../components/Sign/Login";
import RegDriver from "../components/Sign/RegDriver";
import Register from "../components/Sign/Register";
import RegLearner from "../components/Sign/RegLearner";
import Main from "../Layout/Layout";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register-driver",
        element: <RegDriver />,
      },
      {
        path: "/register-learner",
        element: <RegLearner />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/packages",
        element: (
          <PrivateRoute>
            <Packages />
          </PrivateRoute>
        ),
      },
      {
        path: "/package/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
