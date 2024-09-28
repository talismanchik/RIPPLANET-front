import {createBrowserRouter, Navigate} from "react-router-dom";
import {ProfilesPage} from "../pages/profilesPage/profilesPage.tsx";
import {ProfilesWithLikePage} from "../pages/profilesWithLikePage/profilesWithLikePage.tsx";
import App from "./App.tsx";
import {Candles} from "../pages/candles/candles.tsx";
import {NewDeceasedPerson} from "../pages/newDeceasedPerson/newDeceasedPerson.tsx";
import {Messenger} from "../pages/messenger/messenger.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: '',
                element: <Navigate to="home" />,
            },
            {
                path: "/home",
                element: <ProfilesPage/>,
            },
            {
                path: "/profiles-with-like",
                element: <ProfilesWithLikePage/>,
            },
            {
                path: "/candles",
                element: <Candles/>,
            },
            {
                path: "/feelings",
                element: <Candles/>,
            },
            {
                path: "/messenger",
                element: <Messenger/>,
            },
            {
                path: "/new-deceased-person",
                element: <NewDeceasedPerson/>,
            },
        ]
    },
])