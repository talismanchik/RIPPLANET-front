 import s from './profilesWithLikePage.module.scss'
import {Input} from "../../shared/ui/input/input.tsx";
import {PhoneHeader} from "../../features/phoneHeader/phoneHeader.tsx";
import {ProfilesContainer} from "../../features/profilesContainer/profilesContainer.tsx";
import {TabSwitcher} from "../../shared/ui/tabSwitcher/tabSwitcher.tsx";
import {tabData} from "../../widgets/filter/filter.tsx";
import {useState} from "react";
 import {useDeceasedsProfiles} from "../../shared/hooks/useDeceasedsProfiles.ts";

export const ProfilesWithLikePage = () => {
    const deceaseds = useDeceasedsProfiles()
    const [tab, setTab] = useState('alive')

    const onChangeTabSwitcher = (value: string) => {
        setTab(value)
    }


/*
    const FavoriteLikes = profilesHub.filter(profile=>profile.like)
*/
    return (
        <div className={s.profilesPageContainer}>
            <div className={s.headerWrapper}>
                <PhoneHeader headerText={'Favorites'}/>
                <div className={s.searchBlock}>
                    <Input className={s.searchInput} variant={"searchDecoration"} placeholder={'Search'}/>
                    <TabSwitcher className={s.tabSwitcher} items={tabData} onValueChange={onChangeTabSwitcher} value={tab}/>
                </div>
            </div>
            <ProfilesContainer profiles={deceaseds}/>
        </div>
    );
};

