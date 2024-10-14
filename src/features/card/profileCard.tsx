import s from './Card.module.scss'
import {useNavigate} from "react-router-dom";
import {DeceasedsProfilesType} from "../../pages/profilesPage/api/deceasedsProfilesType.ts";
import {useAppDispatch} from "../../app/store.ts";
import {getDeceasedProfileTC} from "../../pages/profile/model/deceasedProfileSlice.ts";
import {useDate} from "../../shared/hooks/useDate.ts";
import {useState} from "react";
import {AvatarContainer} from "./components/avatarContainer.tsx";
import {NamesContainer} from "./components/namesContainer.tsx";
import {DescriptionForDeceased} from "./components/descriptionForDeceased.tsx";
import {SvgBlockForDeceased} from "./components/svgBlockForDeceased.tsx";

type Props = {
    onChange?: (id: number) => void
    isActive?: boolean
    profile: DeceasedsProfilesType
}
export const ProfileCard = ({onChange, profile, isActive}: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onClickCard = (id: number) => {
        navigate(`/profile/${id}`)
        dispatch(getDeceasedProfileTC(id))
    }
    console.log(onChange)
    const [like, setLike] = useState(profile.isFavorite)
    const setIsLike = () => {
        setLike(!like)
    }

    const dates = useDate(profile.date_of_birth, profile.date_of_death)
    return (
        <div onClick={() => onClickCard(profile.id)}
             className={`${s.profileCardContainer} ${isActive ? s.activeContainer : ''}`}>
            <AvatarContainer photo={profile.photos && profile.photos[0]}/>
            <div className={s.profileCardBody}>
                <NamesContainer firstName={profile.first_name}
                                lastName={profile.last_name}
                                middleName={profile.middle_name}
                                firstNameEn={profile.first_name_en}
                                lastNameEn={profile.last_name_en}
                                middleNameEN={profile.middle_name_en}/>
                <DescriptionForDeceased birthday={dates.birthday} death={dates.death} life={dates.age}
                                        country={profile.country}/>
                {/*<div className={s.candles}></div>*/}
            </div>
            <SvgBlockForDeceased isLike={like} setIsLike={setIsLike}/>
            {/*{isActive && <SelectedIcon className={s.selectedIcon}/>}*/}
        </div>
    );
};

