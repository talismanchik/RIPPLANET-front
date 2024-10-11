import s from './family.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";

export const Family = () => {
    return (
        <div className={s.familyContainer}>
            <Typography className={s.placeHolder}
                        variant={'body1'}>
                Здесь пока нет подробностей о семье. Настройте их через инфо профиля!
            </Typography>
        </div>
    );
};

