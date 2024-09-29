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
import {ProfileCard} from "../../features/profileCard/profileCard.tsx";

export const Candles = () => {
    const isVisible = useWindowWidth(1024)
    const location = useLocation();
    const memoryHub = location.pathname === '/candles'? candles: feelings

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
            <div className={s.profilesWrapper}>
                <div className={s.textAreaWrapperInProfiles}>
                    <Input variant={"searchDecoration"} placeholder={'Поиск'}/>
                </div>
                <div className={s.profilesContainer}>
                    {profilesHub.map(profile => {
                        return <ProfileCard name={profile.name}
                                            years={profile.years}
                                            age={profile.age}
                                            country={profile.country}
                                            like={profile.like}
                                            open={openMarketHandler}
                                            photo={profile.photo}
                                            nameEng={profile.nameEng}
                                            isMyCard={profile.isMyCard}/>
                    })}
                </div>
            </div>
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

