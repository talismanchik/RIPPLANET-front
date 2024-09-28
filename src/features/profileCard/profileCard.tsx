import {Icon} from "../../shared/ui/icon/icon.tsx";
import s from './profileCard.module.scss'
import {ProfileType} from "../../services/store.ts";
import {Like} from "../../shared/decorators/like/like.tsx";
import {useState} from "react";

type ProfileCard = ProfileType & {
    open: () => void
}
export const ProfileCard = ({age,open, country, name, nameEng, years, photo, like}: ProfileCard) => {
    const [isLike, setIsLike] = useState(like)

    return (
        <div onClick={open} className={s.profileCardContainer}>
            <div className={s.profileCardImgWrapper}>
                {
                    photo
                        ? <img alt={'photo'} src={photo}/>
                        : <Icon iconId={'avatar'} width={'96px'} height={'96px'} viewBox={'-1.5 0 19 19'}/>
                }
            </div>
            <div className={s.profileCardBody}>
                <div className={s.nameWrapper}>
                    <h3 className={s.name}>{name}</h3>
                    <p>{nameEng}</p>
                </div>
                <div className={s.descriptionWrapper}>
                    <p className={s.years}>{years} <span className={s.age}>({age})</span> <p
                        className={s.country}>{country}</p></p>
                </div>
                <div className={s.candles}></div>
            </div>
            <Like isLike={isLike} setIsLike={setIsLike}/>
        </div>
    );
};

