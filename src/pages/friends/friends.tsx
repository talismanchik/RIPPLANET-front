import s from './friends.module.scss'
import {PhoneHeader} from "../../features/phoneHeader/phoneHeader.tsx";
import {Input} from "../../shared/ui/input/input.tsx";
import {ProfilesContainer} from "../../features/profilesContainer/profilesContainer.tsx";
 import {useState} from "react";
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {useDeceasedsProfiles} from "../../shared/hooks/useDeceasedsProfiles.ts";
export const Friends = () => {
    const [tab, setTab] = useState('alive')

    const deceaseds = useDeceasedsProfiles()

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




