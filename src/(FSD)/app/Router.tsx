import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/ui/HomePage";
import { LoginPage } from "../pages/ui/LoginPage";
import { RegisterPage } from "../pages/ui/RegisterPage";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    }
]);