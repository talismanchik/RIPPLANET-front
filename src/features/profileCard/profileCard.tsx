import {Icon} from "../../shared/ui/icon/icon.tsx";
import s from './profileCard.module.scss'
import {Like} from "../../shared/decorators/like/like.tsx";
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {NavLink} from "react-router-dom";
import {DeceasedsProfilesType} from "../../pages/profilesPage/api/deceasedsProfilesType.ts";

type Props = {
    onChange?: (id: number) => void
    isActive?: boolean
    profile: DeceasedsProfilesType
}
export const ProfileCard = ({onChange, profile, isActive}: Props) => {

const setIsLike = ()=>{
    console.log('')
}
    return (
        <NavLink to={'/profile'}>
            <div onClick={() => onChange != null && onChange(profile.id)}
                 className={`${s.profileCardContainer} ${isActive ? s.activeContainer : ''}`}>
                <div className={s.profileCardImgWrapper}>
                    {
                        profile.photos && profile.photos[0]
                            ? <img className={s.image} alt={'photo'} src={`${import.meta.env.VITE_BASE_URL}${profile.photos[0]}`}/>
                            : <Icon iconId={'avatar'} width={'96px'} height={'96px'}
                                    viewBox={'-1.5 0 19 19'}/>
                    }
                </div>
                <div className={s.profileCardBody}>
                    <div className={s.namesWrapper}>
                        <div className={s.nameWrapper}>
                            <Typography variant={'titleSpecialBold'} className={s.name}>{profile.first_name} {profile.last_name} {profile.middle_name}</Typography>
                        </div>
                        <div className={s.nameEngWrapper}>
                            <Typography className={s.nameEng} variant={'body2'}>{profile.first_name_en} {profile.last_name_en} {profile.middle_name_en}</Typography>
                        </div>
                    </div>
                    <div className={s.descriptionWrapper}>
                        <Typography variant={'body1'} className={s.spansWrapper}>
                            <span className={s.years}>{ new Date(profile.date_of_birth).getFullYear()}-{ new Date(profile.date_of_death).getFullYear()}</span>
                            <span className={s.age}> (0) </span>
                            <span className={s.country}>{profile.country} </span>
                        </Typography>
                    </div>
                    {/*<div className={s.candles}></div>*/}
                </div>
                <div className={s.svgWrapper}>
                     <Like isLike={profile.isFavorite} setIsLike={setIsLike}/>
                    {/*{isMyCard &&
                        <Icon className={s.correcter} iconId={'correcter'} width={'26'} height={'26'}
                              viewBox={'11 11 30 30'}/>
                    }*/}
                </div>
                {/*{isActive && <SelectedIcon className={s.selectedIcon}/>}*/}
            </div>
        </NavLink>
    );
};

