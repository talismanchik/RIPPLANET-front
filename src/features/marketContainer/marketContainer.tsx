import {Icon} from "../../shared/ui/icon/icon.tsx";
import {CandleType} from "../../services/store.ts";
import s from './marketContainer.module.scss'
import {CandleItem} from "../candleItem/candleItem.tsx";
import {useState} from "react";

type MarketContainerType = {
    toClose: () => void
    marketItems: CandleType[]
}
export const MarketContainer = ({toClose, marketItems}: MarketContainerType) => {
    const [isActive, setIsActive] = useState('')
    const setIsActiveHandler =(id: string)=> {
        setIsActive(id)
    }
    return (
        <div className={s.marketContainer}>
            <div className={s.marketHeader}>
                <div className={s.close} onClick={toClose}>
                    <Icon iconId={'close'} width={'30px'} height={'30px'} viewBox={'2 2 20 20'}/>
                </div>
                <p className={s.textHelper}>Выберите свечу</p>
            </div>
            <div className={s.candlesContainer}>
                {marketItems.map(candle => {
                    return <CandleItem id={candle.id} isActive={isActive===candle.id} onChangeActive={setIsActiveHandler} coast={candle.coast} picture={candle.picture}/>
                })}
            </div>
        </div>
    );
};

