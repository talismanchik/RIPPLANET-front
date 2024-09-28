import {profilesHub} from "../../services/store.ts";
import s from './profilesPage.module.scss'
import {ProfilesContainer} from "../../features/profilesContainer/profilesContainer.tsx";

export const ProfilesPage = () => {
    const toOpen =()=>{

    }
    return (
        <div className={s.profilesPageContainer}>
            <div className={s.switchContainer}>
                <div className={`${s.item} ${s.left}`}>Живые</div>
                <div className={`${s.item} ${s.right}`}>В нашей памяти</div>
            </div>

            <ProfilesContainer open={toOpen} profiles={profilesHub}/>
        </div>
    );
};

