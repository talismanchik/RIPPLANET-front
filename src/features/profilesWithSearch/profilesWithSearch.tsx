import s from './profilesWithSearch.module.scss'
import {Input} from "../../shared/ui/input/input.tsx";
import {ProfileCard} from "../profileCard/profileCard.tsx";
import {useAppDispatch, useAppSelector} from "../../app/store.ts";
import {DeceasedsProfilesType} from "../../pages/profilesPage/api/deceasedsProfilesType.ts";
import {useEffect} from "react";
import {getDeceasedsTC} from "../../pages/profilesPage/model/deceasedsProfilesSlice.ts";

type ProfilesWithSearchType = {

    className?: string
    activeProfile?: number
    onChange?: (id: number) => void
}

export const ProfilesWithSearch = ({

                                       activeProfile,
                                       onChange,
                                       className
                                   }: ProfilesWithSearchType) => {
    const dispatch = useAppDispatch()
    const deceaseds = useAppSelector<DeceasedsProfilesType[]>(state => state.deceaseds)

    useEffect(() => {
        deceaseds.length == 0 && dispatch(getDeceasedsTC())
    }, [])

    return (
        <div className={`${s.profilesWrapper} ${className}`}>
            <div className={s.textAreaWrapperInProfiles}>
                <Input variant={"searchDecoration"} placeholder={'Поиск'}/>
            </div>
            <div className={s.profilesContainer}>
                {deceaseds.map(profile => {
                    return <ProfileCard profile={profile}
                                        onChange={onChange}
                                        isActive = {activeProfile === profile.id}
                    />
                })}
            </div>
        </div>
    );
};

