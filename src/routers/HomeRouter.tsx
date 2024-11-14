import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";

const HomeRouter = createBrowserRouter([
    {
        path: "/home",
        element: <Home/>,
    },
]);

export default HomeRouter;