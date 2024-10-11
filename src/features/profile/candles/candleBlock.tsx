import s from './profileCandles.module.scss'
import girl from '../../../assets/images/accaunts/girl.png'
import {Typography} from "../../../shared/ui/typography/typography.tsx";

type Props = {
    image: string
    message?: string
}
export const CandleBlock = ({image, message}: Props) => {
    return (
        <div className={s.candleContainer}>
            <div className={s.header}>
                <div className={s.imgWrapper}>
                    <img alt={'avatar'} src={girl}/>
                </div>
                <div className={s.contentHeader}>
                    <Typography variant={"subhead"}>
                        vika2
                    </Typography>
                    <Typography className={s.time} variant={"subhead"}>
                        2 ч. назад
                    </Typography>
                </div>
            </div>
            <div className={s.candle}>
                <img alt={'image'} src={image}/>
            </div>
            {message &&
                <Typography>
                    {message}
                </Typography>}
        </div>
    );
};

