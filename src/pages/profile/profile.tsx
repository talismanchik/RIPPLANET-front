import s from './profile.module.scss'
import {ArrowBack} from "../../shared/decorators/arrowBack/arrowBack.tsx";
import {ProfileInfo} from "../../widgets/profile/profileInfo/profileInfo.tsx";
import {ProfileWall} from "../../widgets/profile/profileWall/profileWall.tsx";
import {SideMenu} from "../../widgets/profile/sideMenu/sideMenu.tsx";

export const Profile = () => {
    return (
        <div className={s.profileContainer}>
            <ArrowBack className={s.arrowBack}/>
            <SideMenu/>
            <ProfileInfo/>
            <ProfileWall/>
        </div>
    );
};

