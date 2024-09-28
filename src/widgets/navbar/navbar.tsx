import s from './navbar.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {Icon} from "../../shared/ui/icon/icon.tsx";
import {NewPersonButton} from "../../shared/decorators/newPersonButton/newPersonButton.tsx";

export const Navbar = () => {
    const location = useLocation();
    return (
        <nav className={s.navBarContainer}>
            <ul className={s.itemsContainer}>
                {iconsForNavBar.map(icon => {
                    return (
                        <NavLink key={icon.iconId} to={icon.link}
                                 className={location.pathname === `/${icon.link}` ? s.active : ''}>
                            <li className={`${s.iconWrapper} ${s[icon.className]}`}>
                                <Icon iconId={icon.iconId} width={'36px'} height={'36px'} viewBox={icon.viewBox}/>
                            </li>
                        </NavLink>
                    )
                })}
                <NavLink to={'new-deceased-person'}>
                    <NewPersonButton as='li'/>
                </NavLink>
            </ul>
        </nav>
    );
};

//new-deceased-person

//ICONS DATA
const iconsForNavBar: IconsForNavBarType[] = [
    {
        iconId: 'home',
        link: 'home',
        viewBox: '0 0 38 38',
        className: 'homeWrapper',
    },
    {
        iconId: 'like',
        link: 'profiles-with-like',
        viewBox: '0 -3 40 40',
        className: 'likesWrapper',
    },
    {
        iconId: 'candle',
        link: 'candles',
        viewBox: '0 0 28 28',
        className: 'candlesWrapper',
    },
    {
        iconId: 'feelings',
        link: 'feelings',
        viewBox: '2 2 45 45',
        className: 'feelingsWrapper',
    },
    {
        iconId: 'messenger',
        link: 'candles',
        viewBox: '4 4.5 20 20',
        className: 'messengerWrapper',
    },

    {
        iconId: 'plaques',
        link: 'candles',
        viewBox: '-1 -1 38 38',
        className: 'plaquesWrapper',
    },
    {
        iconId: 'contactUs',
        link: 'candles',
        viewBox: '0 0 40 40',
        className: 'contactUsWrapper',
    },

]
export type IconsForNavBarType = {
    iconId:
        | 'filters'
        | 'search'
        | 'avatar'
        | 'home'
        | 'candle'
        | 'feelings'
        | 'burger'
        | 'like'
        | 'plus'
        | 'plaques'
        | 'contactUs'
        | 'arrow_back'
        | 'eye_outline'
        | 'eye_off_outline'
        | 'messenger'
        | 'close',
    link: string,
    width?: string,
    height?: string,
    viewBox: string,
    className: string,
}