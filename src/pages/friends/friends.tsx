import s from './friends.module.scss'
import {PhoneHeader} from "../../features/phoneHeader/phoneHeader.tsx";
import {Input} from "../../shared/ui/input/input.tsx";
import {ProfilesContainer} from "../../features/profilesContainer/profilesContainer.tsx";
 import {useEffect, useState} from "react";
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {useAppDispatch, useAppSelector} from "../../app/store.ts";
import {DeceasedsProfilesType} from "../profilesPage/api/deceasedsProfilesType.ts";
import {getDeceasedsTC} from "../profilesPage/model/deceasedsProfilesSlice.ts";
export const Friends = () => {
    const [tab, setTab] = useState('alive')

    const dispatch = useAppDispatch()
    const deceaseds = useAppSelector<DeceasedsProfilesType[]>(state => state.deceaseds)

    useEffect(() => {
        deceaseds.length == 0 && dispatch(getDeceasedsTC())
    }, [])

    const onChangeTabSwitcher = (value: string) => {
        setTab(value)
    }
    const toOpen = () => {

    }
    return (
        <div className={s.FriendsContainer}>
            <div className={s.headerWrapper}>
                <PhoneHeader headerText={'Favorites'}/>
                <div className={s.searchBlock}>
                    <Input className={s.searchInput} variant={"searchDecoration"} placeholder={'Search'}/>
                    <div className={s.tabsContainer}>
                        <div onClick={()=>onChangeTabSwitcher('friends')}
                            className={`${s.tabWrapper} ${tab === 'friends' ? s.active: ''}`}>
                            <Typography>Друзья</Typography>
                        </div>
                        <div className={`${s.tabWrapper} ${tab === 'searchFriend' ? s.active: ''}`}
                             onClick={()=>onChangeTabSwitcher('searchFriend')}  >
                            <Typography>Найти друзей</Typography>
                        </div>
                    </div>
                </div>
            </div>
            <ProfilesContainer open={toOpen} profiles={deceaseds}/>
        </div>
    );
};




