import {profilesHub} from "../../services/store.ts";
import {ProfileCard} from "../../features/profileCard/profileCard.tsx";
import s from './profilesPage.module.scss'
export const ProfilesPage = () => {
    return (
        <div className={s.profilesPageContainer}>
            {profilesHub.map(profile => {
                return <ProfileCard name={profile.name} years={profile.years} age={profile.age}
                                    country={profile.country} nameEng={profile.nameEng} photo={profile.photo} like={profile.like}/>
            })}
        </div>
    );
};

