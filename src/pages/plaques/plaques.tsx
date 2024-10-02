import s from './plaques.module.scss'
import {ProfilesWithSearch} from "../../features/profilesWithSearch/profilesWithSearch.tsx";
import {profilesHub} from "../../services/store.ts";
import {Constructor} from "../../widgets/constructor/constructor.tsx";
import {useState} from "react";

export const Plaques = () => {
    const [activeProfile, setActiveProfile] = useState('')
    const setActiveProfileHandler = (newId: string)=>{
        setActiveProfile(newId)
    }
    return (
        <div className={s.plaquesContainer}>
            <ProfilesWithSearch profiles={profilesHub} activeProfile={activeProfile} onChange={setActiveProfileHandler}/>
            <Constructor/>
        </div>
    );
};

