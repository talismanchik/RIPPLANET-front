import s from './profileCandles.module.scss'
import {CandleBlock} from "./candleBlock.tsx";
import candle1 from '../../../assets/images/candles/candle11.webp'
import candle2 from '../../../assets/images/candles/candle5.webp'
import candle3 from '../../../assets/images/candles/candle7.webp'
import candle4 from '../../../assets/images/candles/candle17.webp'
import feel1 from '../../../assets/images/feelings/feelings2.webp'
import feel2 from '../../../assets/images/feelings/feelings4.webp'
import feel3 from '../../../assets/images/feelings/feelings5.webp'
import feel4 from '../../../assets/images/feelings/feelings6.webp'
import {useLocation} from "react-router-dom";

export const ProfileCandles = () => {
    const location = useLocation()
    const pictures =
        location.pathname === '/profile/candles'
            ? candles
            : feelings
    const column1: any = []
    const column2: any = []

    pictures.forEach((picture, index) => {
        if (index % 2 === 0) {
            column2.push(picture);
        } else {
            column1.push(picture);
        }
    })

    return (
        <div className={s.profileCandlesContainer}>
            <div className={s.candlesColumn}>
                {column1.map((item: any) => {
                    return <CandleBlock key={item.id}
                                        image={item.picture}
                                        message={item.message}/>
                })}
            </div>
            <div className={s.candlesColumn}>
                {column2.map((item: any) => {
                    return <CandleBlock key={item.id}
                                        image={item.picture}
                                        message={item.message}/>
                })}
            </div>
        </div>
    )
        ;
};

const candles = [
    {id: '1', picture: candle1},
    {id: '2', picture: candle2, message: 'спасибо...'},
    {id: '3', picture: candle3, message: 'спасибо...'},
    {id: '4', picture: candle4},
    {id: '5', picture: candle1},
    {id: '6', picture: candle2, message: 'спасибо...'},
    {id: '7', picture: candle3, message: 'спасибо...'},
    {id: '8', picture: candle4},
    {id: '9', picture: candle1},
    {id: '10', picture: candle2, message: 'спасибо...'},
    {id: '11', picture: candle3, message: 'спасибо...'},
    {id: '12', picture: candle4},

]
const feelings = [
    {id: '1', picture: feel1},
    {id: '2', picture: feel2, message: 'спасибо...'},
    {id: '3', picture: feel3},
    {id: '4', picture: feel4, message: 'спасибо...'}]
