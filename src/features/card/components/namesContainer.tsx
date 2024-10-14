import s from '../Card.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";

type Props = {
    firstName: string
    lastName: string
    middleName: string
    firstNameEn: string
    lastNameEn: string
    middleNameEN: string
}

export const NamesContainer = ({lastName, firstNameEn, lastNameEn, middleNameEN, firstName}:Props) => {
    return (
        <div>
            <div className={s.namesWrapper}>
                <div className={s.nameWrapper}>
                    <Typography variant={'titleSpecialBold'} className={s.name}>{firstName} {middleNameEN} {lastName}</Typography>
                </div>
                <div className={s.nameEngWrapper}>
                    <Typography className={s.nameEng} variant={'body2'}>{firstNameEn} {middleNameEN} {lastNameEn}</Typography>
                </div>
            </div>
        </div>
    );
};

