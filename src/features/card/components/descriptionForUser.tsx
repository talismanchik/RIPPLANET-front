import s from '../Card.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {useUserDate} from "../../../shared/hooks/useUserDate.ts";

type Props = {
    birthdayDate: string
}
export const DescriptionForUser = ({birthdayDate}: Props) => {

    const {birthday, age} = useUserDate(birthdayDate)
    return (
        <div className={s.descriptionWrapper}>
            <Typography variant={'body1'} className={s.spansWrapper}>
                {birthday &&
                    <>
                    <span className={s.years}>
                       {birthday}
                    </span>
                    <span className={s.age}>
                        {age || age === 0 && ` (${age} лет) `}
                    </span>
                    </>
                }
            </Typography>
        </div>
    );
};

