import s from "./profilesContainer.module.scss";
import {ProfileType} from "../../services/store.ts";
import {ProfileCard} from "../profileCard/profileCard.tsx";

type ProfilesContainerType = {
    className?: string
    profiles: ProfileType[]
    open: ()=>void
}
export const ProfilesContainer = ({profiles, open, className}:ProfilesContainerType) => {
    return (
        <div className={`${s.profilesContainer} ${className}`}>
            {profiles.map(profile => {
                return <ProfileCard open={open} name={profile.name} years={profile.years} age={profile.age}
                                    country={profile.country} nameEng={profile.nameEng} photo={profile.photo}
                                    like={profile.like}/>
            })}
        </div>
    );
};
