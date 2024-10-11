import s from './work.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";

export const Work = () => {
    return (
        <div className={s.workContainer}>
            <Typography className={s.placeHolder}
                        variant={'body1'}>
                Здесь пока нет подробностей о работе. Настройте их через инфо профиля!
            </Typography>
        </div>
    );
};

