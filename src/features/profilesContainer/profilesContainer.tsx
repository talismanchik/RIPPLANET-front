import s from "./profilesContainer.module.scss";
import {ProfileType} from "../../services/store.ts";
import {ProfileCard} from "../profileCard/profileCard.tsx";

type ProfilesContainerType = {
    profiles: ProfileType[]
    open: ()=>void
}
export const ProfilesContainer = ({profiles, open}:ProfilesContainerType) => {
    return (
        <div className={s.profilesContainer}>
            {profiles.map(profile => {
                return <ProfileCard open={open} name={profile.name} years={profile.years} age={profile.age}
                                    country={profile.country} nameEng={profile.nameEng} photo={profile.photo}
                                    like={profile.like}/>
            })}
        </div>
    );
};
