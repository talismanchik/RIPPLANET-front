import {createBrowserRouter, Navigate} from "react-router-dom";
import {ProfilesPage} from "../pages/profilesPage/profilesPage.tsx";
import {ProfilesWithLikePage} from "../pages/profilesWithLikePage/profilesWithLikePage.tsx";
import App from "./App.tsx";
import {Candles} from "../pages/candles/ui/candles.tsx";
import {CreateProfile} from "../pages/createProfile/createProfile.tsx";
import {Messenger} from "../pages/messenger/messenger.tsx";
import {Plaques} from "../pages/plaques/plaques.tsx";
import {UserProfile} from "../pages/userProfile/userProfile.tsx";
import {EditProfile} from "../widgets/userProfileBlocks/editProfile/editProfile.tsx";
import {CreatedProfiles} from "../widgets/userProfileBlocks/createdProfiles/createdProfiles.tsx";
import {Payment} from "../widgets/userProfileBlocks/payment/payment.tsx";
import {OrderHistory} from "../widgets/userProfileBlocks/orderHistory/orderHistory.tsx";
import {CandlesHistory} from "../widgets/userProfileBlocks/orderHistory/switch/candlesHistory/candlesHistory.tsx";
import {FeelingsHistory} from "../widgets/userProfileBlocks/orderHistory/switch/feelingsHistory/feelingsHistory.tsx";
import {QrCodeHistory} from "../widgets/userProfileBlocks/orderHistory/switch/qrCodeHistory/qrCodeHistory.tsx";
import {Notification} from "../widgets/userProfileBlocks/notification/notification.tsx";
import {Info} from "../widgets/userProfileBlocks/info/info.tsx";
import {Language} from "../widgets/userProfileBlocks/language/language.tsx";
import {BlackList} from "../widgets/userProfileBlocks/blackList/blackList.tsx";
import {Tree} from "../pages/tree/tree.tsx";
import {Profile} from "../pages/profile/profile.tsx";
import {ProfileCandles} from "../features/profile/candles/profileCandles.tsx";
import {MemoryWall} from "../features/profile/memoryWall/memoryWall.tsx";
import {Friends} from "../pages/friends/friends.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '',
                element: <Navigate to="home"/>,
            },
            {
                path: "/home",
                element: <ProfilesPage/>,
            },
            {
                path: "/friends",
                element: <Friends/>,
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
                path: "/plaques",
                element: <Plaques/>,
            },
            {
                path: "/tree",
                element: <Tree/>,
            },
            {
                path: "/profile",
                element: <Profile/>,
                children: [
                    {
                        path: '',
                        element: <Navigate to="candles"/>,
                    },
                    {
                        path: 'candles',
                        element: <ProfileCandles/>
                    },
                    {
                        path: 'feelings',
                        element: <ProfileCandles/>
                    },
                    {
                        path: 'memory',
                        element: <MemoryWall/>
                    },

                ]
            },
            {
                path: "/create-profile",
                element: <CreateProfile/>,
            },
            {
                path: "/userProfile",
                element: <UserProfile/>,
                children: [
                    {
                        path: '',
                        element: <Navigate to="edit-profile"/>,
                    },
                    {
                        path: 'edit-profile',
                        element: <EditProfile/>
                    },
                    {
                        path: 'created-profiles',
                        element: <CreatedProfiles/>
                    },
                    {
                        path: 'payment',
                        element: <Payment/>
                    },
                    {
                        path: 'order-history',
                        element: <OrderHistory/>,
                        children: [
                            {
                                path: '',
                                element: <Navigate to="candles"/>,
                            },
                            {
                                path: 'candles',
                                element: <CandlesHistory/>
                            },
                            {
                                path: 'feelings',
                                element: <FeelingsHistory/>
                            },
                            {
                                path: 'qr-code',
                                element: <QrCodeHistory/>
                            },
                        ]
                    },
                    {
                        path: 'notification',
                        element: <Notification/>
                    },
                    {
                        path: 'info',
                        element: <Info/>
                    },
                    {
                        path: 'language',
                        element: <Language/>
                    },
                    {
                        path: 'black-list',
                        element: <BlackList/>
                    },
                ]
            },
        ]
    },
])