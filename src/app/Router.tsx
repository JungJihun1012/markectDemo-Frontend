import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components/header";
import { BottomTab } from "../navigation/BottomTab";
import { HomePage } from "../pages/ui/HomePage";
import BasicLayout from "../layout/BasicLayout";

export const Router = createBrowserRouter([
    {
        path: '/home',
        element: <HomePage/>
    },
    {
        path: '/header',
        element: <Header children={undefined}/>
    },
    {
        path: '/bottom',
        element: <BottomTab/>
    },
    // {
    //     path: '/basic',
    //     element: <BasicLayout/>
    // }
]);