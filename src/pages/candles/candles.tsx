import {PhoneHeader} from "../../features/phoneHeader/phoneHeader.tsx";
import s from "./candles.module.scss";
import {Input} from "../../components/ui/input/input.tsx";
import {ProfilesContainer} from "../../features/profilesContainer/profilesContainer.tsx";
import {candles, profilesHub} from "../../services/store.ts";
import {ButtonLink} from "../../components/ui/buttonLink/buttonLink.tsx";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {MarketContainer} from "../../features/marketContainer/marketContainer.tsx";
import * as React from "react";

export const Candles = () => {

    const [isOpenMarket, setIsOpenMarket] = useState(false)
    const closeMarketHandler = () => {
        setIsOpenMarket(false)
        console.log('market close')
    }
    const openMarketHandler = () => {
        setIsOpenMarket(true)
        console.log('market open')
    }

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            closeMarketHandler()
        }
    };
    const location = useLocation();
    return (
        <div className={s.candlesContainer}>
            <PhoneHeader headerText={'За упокой'}/>
            <div className={s.contentWrapper}>
                <div className={s.buttonsWithSignature}>
                    <ButtonLink className={`${s.item1} ${location.pathname === '/candles' ? s.active : ''}`}
                                link={'/candles'} title={'Свечи'}/>
                    <ButtonLink className={`${s.item2} ${location.pathname === '/feelings' ? s.active : ''}`}
                                link={'/feelings'} title={'Чувства'}/>
                    <div className={`${s.inputWrapper} ${s.item3}`}><Input placeholder={'Подпишите свою свечу'}/></div>
                </div>
                <div className={s.profilesWithSearch}>
                    <p className={s.textHelper}>Выберите кому хотите отправить</p>
                    <div className={s.textAreaWrapper}>
                        <Input variant={"searchDecoration"} placeholder={'Поиск'}/>
                    </div>
                    <ProfilesContainer open={openMarketHandler} profiles={profilesHub}/>
                </div>
                {isOpenMarket &&
                    <div className={s.blurMode} onClick={handleOverlayClick}>
                        <div className={s.marketWrapper}>
                            <MarketContainer candles={candles} toClose={closeMarketHandler}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

