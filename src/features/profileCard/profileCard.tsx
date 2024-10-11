import {Icon} from "../../shared/ui/icon/icon.tsx";
import s from './profileCard.module.scss'
import {ProfileType} from "../../services/store.ts";
import {Like} from "../../shared/decorators/like/like.tsx";
import {useState} from "react";
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {SelectedIcon} from "../../shared/decorators/selectedIcon/selectedIcon.tsx";
import {NavLink} from "react-router-dom";

type Props = ProfileType & {
    isMyCard: boolean
    onChange?: (id: string) => void
    isActive?: boolean
}
export const ProfileCard = ({
                                onChange,
                                isActive,
                                age,
                                id,
                                country,
                                name,
                                nameEng,
                                years,
                                photo,
                                like,
                                isMyCard
                            }: Props) => {
    const [isLike, setIsLike] = useState(like)

    return (
        <NavLink to={'/profile'}>
            <div onClick={() => onChange != null && onChange(id)}
                 className={`${s.profileCardContainer} ${isActive ? s.activeContainer : ''}`}>
                <div className={s.profileCardImgWrapper}>
                    {
                        photo
                            ? <img className={s.image} alt={'photo'} src={photo}/>
                            : <Icon className={s.svg} iconId={'avatar'} width={'96px'} height={'96px'}
                                    viewBox={'-1.5 0 19 19'}/>
                    }
                </div>
                <div className={s.profileCardBody}>
                    <div className={s.namesWrapper}>
                        <div className={s.nameWrapper}>
                            <Typography variant={'titleSpecialBold'} className={s.name}>{name}</Typography>
                        </div>
                        <div className={s.nameEngWrapper}>
                            <Typography className={s.nameEng} variant={'body2'}>{nameEng}</Typography>
                        </div>
                    </div>
                    <div className={s.descriptionWrapper}>
                        <Typography variant={'body1'} className={s.spansWrapper}>
                            <span className={s.years}>{years}</span>
                            <span className={s.age}> ({age}) </span>
                            <span className={s.country}>{country} </span>
                        </Typography>
                    </div>
                    <div className={s.candles}></div>
                </div>
                <div className={s.svgWrapper}>
                    {!isActive && <Like isLike={isLike} setIsLike={setIsLike}/>
                    }
                    {isMyCard &&
                        <Icon className={s.correcter} iconId={'correcter'} width={'26'} height={'26'}
                              viewBox={'11 11 30 30'}/>
                    }
                </div>
                {isActive && <SelectedIcon className={s.selectedIcon}/>}
            </div>
        </NavLink>
    );
};

