 import s from './profilesPage.module.scss'
import {ProfilesContainer} from "../../../features/profilesContainer/profilesContainer.tsx";

 import {useDeceasedsProfiles} from "../../../shared/hooks/useDeceasedsProfiles.ts";

export const ProfilesPage = () => {
    const deceaseds = useDeceasedsProfiles()
   /*
    const [tab, setTab] = useState('alive')
*/


   /* const onChangeTabSwitcher = (value: string) => {
        setTab(value)
    }*/

    return (
        <div className={s.profilesPageContainer}>
{/*
            <TabSwitcher className={s.tabSwitcher} items={tabData} onValueChange={onChangeTabSwitcher} value={tab}/>
*/}
            <ProfilesContainer profiles={deceaseds}/>
        </div>
    );
};

