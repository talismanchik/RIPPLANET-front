 import s from './profilesWithLikePage.module.scss'
import {Input} from "../../shared/ui/input/input.tsx";
import {PhoneHeader} from "../../features/phoneHeader/phoneHeader.tsx";
import {ProfilesContainer} from "../../features/profilesContainer/profilesContainer.tsx";
 import {useDeceasedsProfiles} from "../../shared/hooks/requests/useDeceasedsProfiles.ts";
 import {ProfileCard} from "../../features/card/profileCard.tsx";

export const ProfilesWithLikePage = () => {
    const deceaseds = useDeceasedsProfiles()


/*
    const FavoriteLikes = profilesHub.filter(profile=>profile.like)
*/
    return (
        <div className={s.profilesPageContainer}>
            <div className={s.headerWrapper}>
                <PhoneHeader headerText={'Favorites'}/>
                <div className={s.searchBlock}>
                    <Input className={s.searchInput} variant={"searchDecoration"} placeholder={'Search'}/>
                    {/*<TabSwitcher className={s.tabSwitcher} items={tabData} onValueChange={onChangeTabSwitcher} value={tab}/>*/}
                </div>
            </div>
            <ProfilesContainer >
                {deceaseds.map(profile => {
                    return <ProfileCard key={profile.id}
                                        profile={profile}

                    />;
                })}
            </ProfilesContainer>
        </div>
    );
};

