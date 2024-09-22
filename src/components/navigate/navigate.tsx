import s from './navigate.module.scss'
import {Icon} from "../ui/icon/icon.tsx";
import {NavLink, useLocation} from "react-router-dom";

export const Navigate = () => {
    const location = useLocation();

    return (
        <nav className={s.navigateContainer}>
            <ul className={s.navList}>
                <li className={`${s.homeWrapper} `}>
                    <NavLink to={'home'} className={location.pathname === '/home' ? s.active : ''}>
                        <Icon iconId={"home"} width={'36'} height={'36'} viewBox={'0 -1 38 38'}/>
                    </NavLink>
                </li>
                <li className={s.likesWrapper}>
                    <NavLink to={'profilesWithLike'}
                             className={location.pathname === '/profilesWithLike' ? s.active : ''}>
                        <Icon iconId={"like"} width={'36'} height={'36'} viewBox={'0 -3 40 40'}/>
                    </NavLink>
                </li>
                <li className={s.candlesWrapper}>
                    <NavLink to={'candles'} className={location.pathname === '/candles' ? s.active : ''}>
                        <Icon iconId={"candle"} width={'36'} height={'36'} viewBox={'-15 0 50 50'}/>
                    </NavLink>
                </li>
                <li className={s.feelingsWrapper}>
                    <NavLink to={'feelings'} className={location.pathname === '/feelings' ? s.active : ''}>
                        <Icon iconId={"feelings"} width={'36'} height={'36'} viewBox={'2 2 45 45'}/>
                    </NavLink>
                </li>
                <li className={s.plaquesWrapper}>
                    <Icon iconId={"plaques"} width={'36'} height={'36'} viewBox={'-1 -1 38 38'}/>
                </li>
                <li className={s.contactUsWrapper}>
                    <Icon iconId={"contactUs"} width={'36'} height={'36'} viewBox={'0 0 40 40'}/>
                </li>
                <NavLink to={'newDeceasedPerson'}>
                    <li className={s.newPersonWrapper}>
                        <Icon iconId={"plus"} width={'18'} height={'18'} viewBox={'0 -0.5 19 19'}/>
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
};

