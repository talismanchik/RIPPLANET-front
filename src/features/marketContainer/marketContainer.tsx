import {Icon} from "../../shared/ui/icon/icon.tsx";
import s from './marketContainer.module.scss'
import {CandleItem} from "../candleItem/candleItem.tsx";
import {useState} from "react";

type MarketContainerType = {
    toClose: () => void
    marketItems: any
}
export const MarketContainer = ({toClose, marketItems}: MarketContainerType) => {
    const [isActive, setIsActive] = useState('')
    const setIsActiveHandler = (id: string) => {
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
                {marketItems.map((item:any) => {
                    return <CandleItem id={item.id} isActive={isActive == item.id} onChangeActive={setIsActiveHandler}
                 coast={item.coast} picture={item.image}/>
            })}
        </div>
</div>
)
    ;
};

