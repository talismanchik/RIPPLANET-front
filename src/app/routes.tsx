import {createBrowserRouter} from "react-router-dom";
import {ProfilesPage} from "../pages/profilesPage/profilesPage.tsx";
import {ProfilesWithLikePage} from "../pages/profilesWithLikePage/profilesWithLikePage.tsx";
import App from "./App.tsx";
import {Candles} from "../pages/candles/candles.tsx";
import {NewDeceasedPerson} from "../pages/newDeceasedPerson/newDeceasedPerson.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "home",
                element: <ProfilesPage/>,
            },
            {
                path: "profilesWithLike",
                element: <ProfilesWithLikePage/>,
            },
            {
                path: "candles",
                element: <Candles/>,
            },
            {
                path: "feelings",
                element: <Candles/>,
            },
            {
                path: "newDeceasedPerson",
                element: <NewDeceasedPerson/>,
            },
        ]
    },
])