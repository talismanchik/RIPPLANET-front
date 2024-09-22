import {profilesHub} from "../../services/store.ts";
import s from './profilesPage.module.scss'
import {ProfilesContainer} from "../../features/profilesContainer/profilesContainer.tsx";

export const ProfilesPage = () => {
    const toOpen =()=>{

    }
    return (
        <div className={s.profilesPageContainer}>
            <ProfilesContainer open={toOpen} profiles={profilesHub}/>
        </div>
    );
};

