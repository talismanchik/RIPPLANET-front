import {profilesHub} from "../../services/store.ts";
import s from './profilesPage.module.scss'
import {ProfilesContainer} from "../../features/profilesContainer/profilesContainer.tsx";
import {TabSwitcher} from "../../shared/ui/tabSwitcher/tabSwitcher.tsx";
import {tabData} from "../../widgets/filter/filter.tsx";
import {useState} from "react";

export const ProfilesPage = () => {
    const [tab, setTab] = useState('alive')

    const onChangeTabSwitcher = (value: string) => {
        setTab(value)
    }
    const toOpen =()=>{

    }
    return (
        <div className={s.profilesPageContainer}>
            <TabSwitcher className={s.tabSwitcher} items={tabData} onValueChange={onChangeTabSwitcher} value={tab}/>
            <ProfilesContainer open={toOpen} profiles={profilesHub}/>
        </div>
    );
};

