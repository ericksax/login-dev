import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "cadastro",
        element: <Register />
    }
])

