import s from './deceasedProfile.module.scss'
import {ArrowBack} from "../../../shared/decorators/arrowBack/arrowBack.tsx";
import {ProfileInfo} from "../../../widgets/profile/profileInfo/profileInfo.tsx";
import {ProfileWall} from "../../../widgets/profile/profileWall/profileWall.tsx";
import {SideMenu} from "../../../widgets/profile/sideMenu/sideMenu.tsx";
import {useAppSelector} from "../../../app/store.ts";
import {DeceasedProfileType} from "../api/deceasedProfileType.ts";

export const DeceasedProfile = () => {
    const deceasedProfile = useAppSelector<DeceasedProfileType>(state => state.deceasedProfile)

    return (
        <div className={s.profileContainer}>
            <ArrowBack className={s.arrowBack}/>
            <SideMenu/>
            <ProfileInfo profile={deceasedProfile} />
            <ProfileWall/>
        </div>
    );
};

