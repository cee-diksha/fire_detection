import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Login from "./pages/Login"


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/settings",
        element: <Settings />
    },
    {
        path: "/login",
        element: <Login />
    }
])