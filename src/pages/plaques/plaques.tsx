import s from './plaques.module.scss'
import {ProfilesWithSearch} from "../../features/profilesWithSearch/profilesWithSearch.tsx";
 import {Constructor} from "../../widgets/constructor/constructor.tsx";
import { useState} from "react";


export const Plaques = () => {
    const [activeProfile, setActiveProfile] = useState<number>()

    const setActiveProfileHandler = (newId: number)=>{
        setActiveProfile(newId)
    }
    return (
        <div className={s.plaquesContainer}>
            <ProfilesWithSearch activeProfile={activeProfile} onChange={setActiveProfileHandler}/>
            <Constructor/>
        </div>
    );
};

