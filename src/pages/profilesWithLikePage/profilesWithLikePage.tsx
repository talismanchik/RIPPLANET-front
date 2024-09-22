import {profilesHub} from "../../services/store.ts";
import {ProfileCard} from "../../features/profileCard/profileCard.tsx";
import s from './profilesWithLikePage.module.scss'
import {Input} from "../../components/ui/input/input.tsx";
import {Icon} from "../../components/ui/icon/icon.tsx";

export const ProfilesWithLikePage = () => {
    return (
        <div className={s.profilesPageContainer}>
            <div className={s.profileHeader}>
                <div className={s.arrow}>
                    <Icon iconId={'arrow_back'} width={'19px'} height={'19px'} viewBox={'6 5 14 14'}/>
                </div>
                <span className={s.headerText}>Favorites</span>
            </div>
            <div className={s.textAreaWrapper}>
                <Input variant={"searchDecoration"} placeholder={'Search'}/>
            </div>
            <div className={s.profilesWrapper}>
                {profilesHub.filter(profile => profile.like).map(profile => {
                    return <ProfileCard name={profile.name} years={profile.years} age={profile.age}
                                        country={profile.country} nameEng={profile.nameEng} photo={profile.photo}
                                        like={profile.like}/>
                })}
            </div>

        </div>
    );
};

