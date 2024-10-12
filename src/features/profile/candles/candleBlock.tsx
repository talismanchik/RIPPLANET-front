import s from './profileCandles.module.scss'
import girl from '../../../assets/images/accaunts/girl.png'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {PostHeader} from "../postHeader/postHeader.tsx";

type Props = {
    image: string
    message?: string
}
export const CandleBlock = ({image, message}: Props) => {
    return (
        <div className={s.candleContainer}>
            <PostHeader avatar={girl}/>
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

