import s from "./profilesContainer.module.scss";
import {ProfileCard} from "../profileCard/profileCard.tsx";
import {DeceasedsProfilesType} from "../../pages/profilesPage/api/deceasedsProfilesType.ts";

type ProfilesContainerType = {
    className?: string
    profiles: DeceasedsProfilesType[]
}
export const ProfilesContainer = ({profiles, className}: ProfilesContainerType) => {

    return (
        <div className={`${s.profilesContainer} ${className}`}>
            {profiles.map(profile => {
                return <ProfileCard key={profile.id}
                                    profile={profile}/>
            })}
        </div>
    );
};
