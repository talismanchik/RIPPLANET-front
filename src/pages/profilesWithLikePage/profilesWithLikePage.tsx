 import s from './profilesWithLikePage.module.scss'
import {Input} from "../../shared/ui/input/input.tsx";
import {PhoneHeader} from "../../features/phoneHeader/phoneHeader.tsx";
import {ProfilesContainer} from "../../features/profilesContainer/profilesContainer.tsx";
import {TabSwitcher} from "../../shared/ui/tabSwitcher/tabSwitcher.tsx";
import {tabData} from "../../widgets/filter/filter.tsx";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/store.ts";
import {DeceasedsProfilesType} from "../profilesPage/api/deceasedsProfilesType.ts";
import {getDeceasedsTC} from "../profilesPage/model/deceasedsProfilesSlice.ts";

export const ProfilesWithLikePage = () => {
    const dispatch = useAppDispatch()
    const deceaseds = useAppSelector<DeceasedsProfilesType[]>(state => state.deceaseds)
    useEffect(() => {
        deceaseds.length == 0 && dispatch(getDeceasedsTC())
    }, []);
    const [tab, setTab] = useState('alive')

    const onChangeTabSwitcher = (value: string) => {
        setTab(value)
    }
    const toOpen = () => {

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
            <ProfilesContainer open={toOpen} profiles={deceaseds}/>
        </div>
    );
};

