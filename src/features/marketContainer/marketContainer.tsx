import {Icon} from "../../shared/ui/icon/icon.tsx";
import s from './marketContainer.module.scss'
import {CandleItem} from "../candleItem/candleItem.tsx";
import {useState} from "react";
import {CandlesType, FeelingsType} from "../../pages/candles/api/candlesType.ts";

type Props = {
    toClose?: () => void
    feelings?: FeelingsType[]
    candles?: CandlesType[]
}
export const MarketContainer = ({toClose, feelings, candles}: Props) => {
    const [isActive, setIsActive] = useState<number>()

    const setIsActiveHandler = (id: number) => {
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
                {candles && candles.map((item: CandlesType) => {
                    return <CandleItem key={item.id} id={item.id} isActive={isActive == item.id}
                                       onChangeActive={setIsActiveHandler}
                                       coast={item.prices[0].price} picture={item.image}/>
                })}
                {feelings && feelings.map((item: FeelingsType) => {
                    return <CandleItem key={item.id} id={item.id} isActive={isActive == item.id}
                                       onChangeActive={setIsActiveHandler}
                                       picture={item.image}/>
                })}
            </div>
        </div>
    )


    /* ?{marketItems.map((item:CandlesType | FeelingsType) => {
                                   if('price' in item){
                                       return <CandleItem key={item.id} id={item.id} isActive={isActive == item.id} onChangeActive={setIsActiveHandler}
                                                          coast={} picture={item.image}/>
                                   }

                               })}
                           :{marketItems.map((item:CandlesType | FeelingsType) => {
                                   if('price' in item){
                                       return <CandleItem key={item.id} id={item.id} isActive={isActive == item.id} onChangeActive={setIsActiveHandler}
                                                          coast={} picture={item.image}/>
                                   }

                               })}*/
}