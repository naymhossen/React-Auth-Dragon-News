import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../../Pages/Home";
import Login from "../../Firebase/Login";
import Register from "../../Firebase/Register";
import Newsdetails from "../../Pages/Newsdetails";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";


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
                path: "/newsdetails/:_id",
                element:<PrivateRoute> <Newsdetails /> </PrivateRoute>
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