import {Icon} from "../../shared/ui/icon/icon.tsx";
import s from './profileCard.module.scss'
import {ProfileType} from "../../services/store.ts";

type ProfileCard = ProfileType & {
    open: () => void
}
export const ProfileCard = ({age,open, country, name, nameEng, years, photo, like}: ProfileCard) => {
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
            <div className={s.likeWrapper} data-islike={like}>
                <Icon iconId={'like'} width={'18'} height={'14px'} viewBox={'0 0 40 40'}/>
            </div>
        </div>
    );
};

