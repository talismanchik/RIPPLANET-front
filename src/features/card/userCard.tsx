import s from './Card.module.scss'
import {UserType} from "../../pages/users/api/usersType.ts";
import {AvatarContainer} from "./components/avatarContainer.tsx";
import {NamesContainer} from "./components/namesContainer.tsx";
import {getDeceasedProfileTC} from "../../pages/profile/model/deceasedProfileSlice.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/store.ts";
import {DescriptionForUser} from "./components/descriptionForUser.tsx";

type Props = {
    onChange?: (id: number) => void
    isActive?: boolean
    user: UserType
}
export const UserCard = ({user, isActive, onChange}: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    console.log(onChange)
    const onClickCard = (id: number) => {
        navigate(`/profile/${id}`)
        dispatch(getDeceasedProfileTC(id))
    }
    return (
        <div onClick={() => onClickCard(user.id)}
             className={`${s.profileCardContainer} ${isActive ? s.activeContainer : ''}`}>
            <AvatarContainer photo={user.photos && user.photos[0]}/>
            <div className={s.profileCardBody}>
                <NamesContainer firstName={user.first_name}
                                lastName={user.last_name}
                                middleName={user.middle_name}
                                firstNameEn={user.first_name_en}
                                lastNameEn={user.last_name_en}
                                middleNameEN={user.middle_name_en}/>
                <DescriptionForUser birthdayDate={user.date_of_birth}/>
                {/*<div className={s.candles}></div>*/}
            </div>
           {/* <SvgBlockForDeceased isLike={like} setIsLike={setIsLike}/>*/}
            {/*{isActive && <SelectedIcon className={s.selectedIcon}/>}*/}
        </div>
    );
};

