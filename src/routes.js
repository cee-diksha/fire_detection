import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import SpecificDevice from "./pages/SpecificDevice";


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
    },
    {
        path: "/info/:id",
        element: <SpecificDevice />
    }
])