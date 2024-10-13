import {Icon} from "../../shared/ui/icon/icon.tsx";
import s from './profileCard.module.scss'
import {Like} from "../../shared/decorators/like/like.tsx";
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {useNavigate} from "react-router-dom";
import {DeceasedsProfilesType} from "../../pages/profilesPage/api/deceasedsProfilesType.ts";
import {useAppDispatch} from "../../app/store.ts";
import {getDeceasedProfileTC} from "../../pages/profile/model/deceasedProfileSlice.ts";
import {UseDate} from "../../shared/hooks/useDate.ts";

type Props = {
    onChange?: (id: number) => void
    isActive?: boolean
    profile: DeceasedsProfilesType
}
export const ProfileCard = ({onChange, profile, isActive}: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    console.log(onChange)
    const onClickCard = (id:number)=>{
        navigate(`/profile/${id}`)
        dispatch(getDeceasedProfileTC(id))
    }

const setIsLike = ()=>{
    console.log('')
}

    const dates = UseDate(profile.date_of_birth, profile.date_of_death)
    return (
            <div onClick={() => onClickCard(profile.id)}
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
                            <span className={s.years}>{dates.birthday? dates.birthday: 'неизвестно'} - {dates.death? dates.death: 'неизвестно'}</span>
                            <span className={s.age}>{dates.life && `(${dates.life} лет)`}</span>
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
    );
};

