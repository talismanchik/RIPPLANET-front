import {PhoneHeader} from "../../features/phoneHeader/phoneHeader.tsx";
import s from "./candles.module.scss";
import {Input} from "../../shared/ui/input/input.tsx";
import {candles, feelings, profilesHub} from "../../services/store.ts";
import {ButtonLink} from "../../shared/ui/buttonLink/buttonLink.tsx";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {MarketContainer} from "../../features/marketContainer/marketContainer.tsx";
import * as React from "react";
import {useWindowWidth} from "../../shared/hooks/useWindowWidth.ts";
import {ProfilesWithSearch} from "../../features/profilesWithSearch/profilesWithSearch.tsx";

export const Candles = () => {
    const isVisible = useWindowWidth(1024)
    const location = useLocation();
    const memoryHub = location.pathname === '/candles' ? candles : feelings

    const [isOpenMarket, setIsOpenMarket] = useState(false)
    const [activeProfile, setActiveProfile] = useState('')
    const closeMarketHandler = () => {
        setIsOpenMarket(false)
    }
    const onClickProfileHandler = (id: string) => {
        setIsOpenMarket(true)
        setActiveProfile(id)
    }

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            console.log(event.target === event.currentTarget)
            closeMarketHandler()
        }
    };

    return (
        <div className={s.candlesContainer}>
            <div className={s.candlesHeaderWrapper}>
                <PhoneHeader headerText={'За упокой'}/>
                <div className={s.contentWrapper}>
                    <div className={s.buttonsWithSignature}>
                        <ButtonLink className={`${s.item1} ${location.pathname === '/candles' ? s.active : ''}`}
                                    link={'/candles'} title={'Свечи'}/>
                        <ButtonLink className={`${s.item2} ${location.pathname === '/feelings' ? s.active : ''}`}
                                    link={'/feelings'} title={'Чувства'}/>
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
                                onChange={onClickProfileHandler}
                                profiles={profilesHub}/>
            {isOpenMarket && !isVisible &&
                <div className={`${s.blurMode}`} onClick={handleOverlayClick}>
                    <div className={s.marketWrapper}>
                        <MarketContainer marketItems={memoryHub} toClose={closeMarketHandler}/>
                    </div>
                </div>
            }
            <div className={s.marketWrapperForWeb}>
                <MarketContainer marketItems={memoryHub} toClose={closeMarketHandler}/>
            </div>
        </div>
    );
};

