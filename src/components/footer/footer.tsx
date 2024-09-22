import s from './footer.module.scss'
import {Icon} from "../ui/icon/icon.tsx";
import {Link, useLocation} from "react-router-dom";

export const Footer = () => {

    const location = useLocation()
    return (
        <footer className={s.navigateContainer}>
            <ul className={s.navList}>
                <li className={s.homeWrapper}>
                    <Link to={'home'} className={location.pathname === '/home' ? s.active : ''}>
                        <Icon iconId={"home"} width={'22'} height={'22'} viewBox={'0 0 38 38'}/>
                    </Link>
                </li>
                <li className={s.candlesWrapper}>
                    <Link to={'candles'} className={location.pathname === '/candles' ? s.active : ''}>
                        <Icon iconId={"candle"} width={'22'} height={'22'} viewBox={'-15 0 50 50'}/>
                    </Link>
                </li>
                <Link to={'newDeceasedPerson'}>
                    <li className={s.newPersonWrapper}>
                        <Icon iconId={"plus"} width={'18'} height={'18'} viewBox={'0 -0.5 19 19'}/>
                    </li>
                </Link>
                <li className={s.likesWrapper}>
                    <Link to={'profilesWithLike'} className={location.pathname === '/profilesWithLike' ? s.active : ''}>
                        <Icon iconId={"like"} width={'22'} height={'22'} viewBox={'0 -3 40 40'}/>
                    </Link>
                </li>
                <li className={s.burgerWrapper}>
                    <Icon iconId={"burger"} width={'22'} height={'22'} viewBox={'3 3 23 23'}/>
                </li>

            </ul>
        </footer>
    );
};

