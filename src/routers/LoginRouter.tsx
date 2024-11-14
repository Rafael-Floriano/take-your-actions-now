import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";

const LoginRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

export default LoginRouter;