import s from './cardForTree.module.scss'
import {Icon} from "../../../shared/ui/icon/icon.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";

type Props = {
    onMoreClick: () => void
    info: personInfo
}
export const CardForTree = ({info, onMoreClick}: Props) => {
    return (
        <div className={`${s.cardForTreeContainer} ${info.className}`}>
            <div className={`${s.imgContainer} ${info.female === 'female' ? s.femaleBorder : s.maleBorder}`}>
                <img alt={'avatar'} src={info.photo}/>
            </div>
            <div onClick={onMoreClick} className={s.moreWrapper}>
                <Icon iconId={'more'} viewBox={'0 0 24 24'}/>
            </div>
            <div className={s.infoContainer}>
                <Typography className={s.kinship} variant={'head1'}>{info.kinship}</Typography>
                <div className={s.fullName}>
                    <Typography className={s.surname} variant={"body2"}>{info.surname}</Typography>
                    {info.secondSurname &&
                        <Typography className={s.secondSurname} variant={"body2"}>({info.secondSurname})</Typography>}
                    <Typography className={s.firstName} variant={"body2"}>{info.name}</Typography>
                    <Typography className={s.patronymicSpan} variant={"body2"}>{info.patronymic}</Typography>
                </div>
                <div className={s.lifeTime}>
                    <Typography>{info.birthday}</Typography>
                    <Typography>{info.death}</Typography>
                </div>
            </div>
        </div>
    );
};


//Type

export type personInfo = {
    kinship: string
    photo: string
    name: string
    surname: string
    patronymic: string
    secondSurname?: string
    id: string
    birthday: string
    death?: boolean
    female: 'male' | 'female'
    className?: string
}