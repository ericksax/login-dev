import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Helps from "./pages/helps";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "cadastro",
        element: <Register />
    },
    {
        path: "helps",
        element: <Helps />
    }
])

