import s from './profilesWithSearch.module.scss'
import {Input} from "../../shared/ui/input/input.tsx";
import {ProfileCard} from "../card/profileCard.tsx";
import {useDeceasedsProfiles} from "../../shared/hooks/requests/useDeceasedsProfiles.ts";

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
    const deceaseds = useDeceasedsProfiles()

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

