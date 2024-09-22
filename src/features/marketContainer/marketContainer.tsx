import {Icon} from "../../components/ui/icon/icon.tsx";
import {CandleType} from "../../services/store.ts";
import s from './marketContainer.module.scss'
import {CandleItem} from "../candleItem/candleItem.tsx";

type MarketContainerType = {
    toClose: () => void
    candles: CandleType[]
}
export const MarketContainer = ({toClose, candles}: MarketContainerType) => {
    return (
        <div className={s.marketContainer}>
            <div className={s.marketHeader}>
                <div className={s.close} onClick={toClose}>
                    <Icon iconId={'close'} width={'30px'} height={'30px'} viewBox={'2 2 20 20'}/>
                </div>
                <p className={s.textHelper}>Выберите свечу</p>
            </div>
            <div className={s.candlesContainer}>
                {candles.map(candle => {
                    return <CandleItem coast={candle.coast} picture={candle.picture}/>
                })}
            </div>
        </div>
    );
};

