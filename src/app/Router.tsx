import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/ui/HomePage";
import { LoginPage } from "../pages/ui/LoginPage";

export const Router = createBrowserRouter([
    {
        path: '/home',
        element: <HomePage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    }
]);