import s from '../Card.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";

type Props = {
    birthday: number | null
    death: number | null
    life: number | null
    country: string
}
export const DescriptionForDeceased = ({birthday, life, country, death}:Props) => {
    return (
        <div className={s.descriptionWrapper}>
            <Typography variant={'body1'} className={s.spansWrapper}>
                        <span className={s.years}>
                            {birthday ? birthday : 'неизвестно'} - {death ? death : 'неизвестно'}
                        </span>
                <span className={s.age}>{life && ` (${life} лет) `}</span>
                <span className={s.country}>{country} </span>
            </Typography>
        </div>
    );
};

