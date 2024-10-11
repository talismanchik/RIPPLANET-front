import s from './religion.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";


export const Religion = () => {
    return (
        <div className={s.religionContainer}>
            <div className={s.religion}>
                <Typography variant={'body1'}>
                    Религия неизвестна
                </Typography>
            </div>
            <div className={s.separator}></div>
            <div className={s.life}>
                <div className={s.lifeBlock}>
                    <Typography className={s.label}
                                variant={'subhead'}>
                        Дата рождения
                    </Typography>
                    <Typography
                        variant={'body2'}>
                        19.08.1956 г.
                    </Typography>
                </div>
                <div className={s.lifeBlock}>
                    <Typography className={s.label}
                                variant={'subhead'}>
                        Дата смерти
                    </Typography>
                    <Typography
                        variant={'body2'}>
                        21.09.2023 г.
                    </Typography>
                </div>
            </div>
        </div>
    );
};

