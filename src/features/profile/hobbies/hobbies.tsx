import s from './hobbies.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";

export const Hobbies = () => {
    return (
        <div className={s.hobbiesContainer}>
            <Typography className={s.placeHolder}
                        variant={'body1'}>
                Здесь пока нет подробностей об увлечениях. Настройте их через инфо профиля!
            </Typography>
        </div>
    );
};

