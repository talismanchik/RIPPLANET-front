import s from "./arrowBack.module.scss";
import {Typography} from "../../ui/typography/typography.tsx";
import { useNavigate} from "react-router-dom";

type Props = {
    className?: string
}
export const ArrowBack = ({className}:Props) => {
    const navigate = useNavigate()
    const backToHandler = () => {
        console.log('click')
        navigate(-1)
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

