import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import createRoutes from "./Components/Route/Route.jsx";
import Authprovider from "./Firebase/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={createRoutes}></RouterProvider>
    </Authprovider>
  </React.StrictMode>
);
