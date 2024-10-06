import s from "./arrowBack.module.scss";
import {Typography} from "../../ui/typography/typography.tsx";

type Props = {
    className?: string
}
export const ArrowBack = ({className}:Props) => {
    return (
        <div className={`${s.linkToBack} ${className}`}>
            <div className={s.arrowBack}></div>
            <Typography variant={'body2'}>
                Вернуться
            </Typography>
        </div>
    );
};

