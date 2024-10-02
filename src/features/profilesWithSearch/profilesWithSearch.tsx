import s from './profilesWithSearch.module.scss'
import {Input} from "../../shared/ui/input/input.tsx";
import {ProfileType} from "../../services/store.ts";
import {ProfileCard} from "../profileCard/profileCard.tsx";

type ProfilesWithSearchType = {
    profiles: ProfileType[]
    className?: string
    activeProfile?: string
    onChange?: (id: string) => void
}

export const ProfilesWithSearch = ({
                                       profiles,
                                       activeProfile,
                                       onChange,
                                       className
                                   }: ProfilesWithSearchType) => {
    return (
        <div className={`${s.profilesWrapper} ${className}`}>
            <div className={s.textAreaWrapperInProfiles}>
                <Input variant={"searchDecoration"} placeholder={'Поиск'}/>
            </div>
            <div className={s.profilesContainer}>
                {profiles.map(profile => {
                    return <ProfileCard name={profile.name}
                                        years={profile.years}
                                        age={profile.age}
                                        country={profile.country}
                                        like={profile.like}
                                        onChange={onChange}
                                        photo={profile.photo}
                                        nameEng={profile.nameEng}
                                        isMyCard={profile.isMyCard}
                                        isActive={activeProfile === profile.id}
                                        id={profile.id}
                    />
                })}
            </div>
        </div>
    );
};

