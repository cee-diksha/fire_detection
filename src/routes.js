import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import SpecificDevice from "./pages/SpecificDevice";
import SpecificComp from "./pages/SpecificComp";
import SpecificDeck from "./pages/SpecificDeck";
import UserMangement from "./pages/UserMangement";


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
    },
    {
        path: "/deck/:deck",
        element: <SpecificDeck />
    },
    {
        path: "/deck/:deck/:comp",
        element: <SpecificComp />
    },
    {
        path: "/user-management",
        element: <UserMangement />
    }
])