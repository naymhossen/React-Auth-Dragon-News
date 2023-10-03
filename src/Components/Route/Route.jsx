import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../../Pages/Home";
import Login from "../../Firebase/Login";
import Register from "../../Firebase/Register";


const  createRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ]
    }
]);

export default createRoutes ;