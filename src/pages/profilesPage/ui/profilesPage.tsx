 import s from './profilesPage.module.scss'
import {ProfilesContainer} from "../../../features/profilesContainer/profilesContainer.tsx";
 import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
 import {DeceasedsProfilesType} from "../api/deceasedsProfilesType.ts";
import {getDeceasedsTC} from "../model/deceasedsProfilesSlice.ts";

export const ProfilesPage = () => {
    const dispatch = useAppDispatch()
    const deceaseds = useAppSelector<DeceasedsProfilesType[]>(state => state.deceaseds)
/*
    const [tab, setTab] = useState('alive')
*/

    useEffect(() => {
        deceaseds.length == 0 && dispatch(getDeceasedsTC())
    }, []);
   /* const onChangeTabSwitcher = (value: string) => {
        setTab(value)
    }*/
    const toOpen =()=>{
    }
    return (
        <div className={s.profilesPageContainer}>
{/*
            <TabSwitcher className={s.tabSwitcher} items={tabData} onValueChange={onChangeTabSwitcher} value={tab}/>
*/}
            <ProfilesContainer open={toOpen} profiles={deceaseds}/>
        </div>
    );
};

