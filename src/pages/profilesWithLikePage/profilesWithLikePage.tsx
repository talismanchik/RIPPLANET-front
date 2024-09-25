import {profilesHub} from "../../services/store.ts";
import s from './profilesWithLikePage.module.scss'
import {Input} from "../../shared/ui/input/input.tsx";
import {PhoneHeader} from "../../features/phoneHeader/phoneHeader.tsx";
import {ProfilesContainer} from "../../features/profilesContainer/profilesContainer.tsx";

export const ProfilesWithLikePage = () => {
    const toOpen = () => {

    }
    return (
        <div className={s.profilesPageContainer}>
            <div className={s.headerWrapper}>
                <PhoneHeader headerText={'Favorites'}/>
                <div className={s.textAreaWrapper}>
                    <Input variant={"searchDecoration"} placeholder={'Search'}/>
                </div>
            </div>
            <ProfilesContainer open={toOpen} profiles={profilesHub}/>
        </div>
    );
};

