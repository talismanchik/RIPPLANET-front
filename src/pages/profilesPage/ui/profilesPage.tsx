 import s from './profilesPage.module.scss'
import {ProfilesContainer} from "../../../features/profilesContainer/profilesContainer.tsx";
 import {useDeceasedsProfiles} from "../../../shared/hooks/requests/useDeceasedsProfiles.ts";
 import {ProfileCard} from "../../../features/card/profileCard.tsx";

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

