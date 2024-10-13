import {PhoneHeader} from "../../../features/phoneHeader/phoneHeader.tsx";
import s from "./candles.module.scss";
import {Input} from "../../../shared/ui/input/input.tsx";
import {ButtonLink} from "../../../shared/ui/buttonLink/buttonLink.tsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {MarketContainer} from "../../../features/marketContainer/marketContainer.tsx";
import {ProfilesWithSearch} from "../../../features/profilesWithSearch/profilesWithSearch.tsx";
import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {CandlesType, FeelingsType} from "../api/candlesType.ts";
import {getFeelingsTC} from "../model/feelingsSlice.ts";
import {getCandlesTC} from "../model/candlesSlice.ts";

export const Candles = () => {
    const dispatch = useAppDispatch()
    const feelings = useAppSelector<FeelingsType[]>(state => state.feelings)
    const candles = useAppSelector<CandlesType[]>(state => state.candles)

    const [candlesHub, setCandlesHub] = useState<CandlesType[] >()
    const [feelingsHub, setFeelingsHub] = useState< FeelingsType[]>()
    const location = useLocation();


    useEffect(() => {
        if (location.pathname === '/candles') {
            dispatch(getCandlesTC())
        } else {
            dispatch(getFeelingsTC())
        }
    }, [location.pathname]);
    useEffect(() => {
        setFeelingsHub([...feelings])
    }, [feelings])

    useEffect(() => {
        setCandlesHub([...candles])
    }, [candles])


    const [isOpenMarket, setIsOpenMarket] = useState(false)
    isOpenMarket && console.log(isOpenMarket)
    const [activeProfile, setActiveProfile] = useState<number>()
    const closeMarketHandler = () => {
        setIsOpenMarket(false)
    }
    const onClickProfileHandler = (id: number) => {
        setIsOpenMarket(true)
        setActiveProfile(id)
    }

    return (
        <div className={s.candlesContainer}>
            <div className={s.candlesHeaderWrapper}>
                <PhoneHeader headerText={'За упокой'}/>
                <div className={s.contentWrapper}>
                    <div className={s.buttonsWithSignature}>
                        <ButtonLink className={`${s.item1} ${location.pathname === '/candles' ? s.active : ''}`}
                            /*onClick={onClickCandles}*/
                                    link={'/candles'}
                                    title={'Свечи'}/>
                        <ButtonLink className={`${s.item2} ${location.pathname === '/feelings' ? s.active : ''}`}
                            /*onClick={onClickFeelings}*/
                                    link={'/feelings'}
                                    title={'Чувства'}/>
                        <div className={`${s.inputWrapper} ${s.item3}`}>
                            <Input placeholder={'Подпишите свою свечу'}/>
                        </div>
                    </div>
                    <p className={s.textHelper}>Выберите кому хотите отправить</p>
                    <div className={s.textAreaWrapper}>
                        <Input variant={"searchDecoration"} placeholder={'Поиск'}/>
                    </div>
                </div>
            </div>
            <ProfilesWithSearch className={s.profilesGrid}
                                activeProfile={activeProfile}
                                onChange={onClickProfileHandler}/>
            <div className={s.marketWrapperForWeb}>
                {location.pathname === '/candles'
                    ? <MarketContainer candles={candlesHub} toClose={closeMarketHandler}/>
                    : <MarketContainer feelings={feelingsHub} toClose={closeMarketHandler}/>
                }
            </div>
        </div>
    );
};

