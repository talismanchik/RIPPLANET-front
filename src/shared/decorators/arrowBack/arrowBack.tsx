import s from "./arrowBack.module.scss";
import {Typography} from "../../ui/typography/typography.tsx";
import {To, useNavigate} from "react-router-dom";

type Props = {
    className?: string
    to?: To
}
export const ArrowBack = ({className, to}:Props) => {
    const navigate = useNavigate()
    const backToHandler = () => {
        console.log('click')
        to ? navigate(to) : navigate(-1)
    }
    return (
        <div  onClick={backToHandler} className={`${s.linkToBack} ${className}`}>
            <div className={s.arrowBack}></div>
            <Typography variant={'body2'}>
                Вернуться
            </Typography>
        </div>
    );
};

