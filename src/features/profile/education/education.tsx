import s from './education.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
export const Education = () => {
    return (
        <div className={s.educationContainer}>
            <Typography className={s.placeHolder}
                        variant={'body1'}>
                Здесь пока нет подробностей об образовании. Настройте их через инфо профиля!
            </Typography>
        </div>
    );
};

