import s from './navbar.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {Icon} from "../../shared/ui/icon/icon.tsx";
import {NewPersonButton} from "../../shared/decorators/newPersonButton/newPersonButton.tsx";
import {Popup} from "../popup/popup.tsx";
import {useState} from "react";
import {ContactUs} from "../../features/contactUs/contactUs.tsx";

export const Navbar = () => {
    const location = useLocation();
    const [popupIsOpen, setPopupIsOpen] = useState(false)
    const setPopupIsOpenHandler = () => {
        setPopupIsOpen(!popupIsOpen)
    }
    return (
        <>
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
                    <li onClick={setPopupIsOpenHandler}
                        className={`${s.iconWrapper} ${s.contactUsWrapper} ${popupIsOpen ? s.popupActive : ''}`}>
                        <Icon iconId={'contactUs'} viewBox={'0 0 40 40'} height={'36'} width={'36'}/>
                    </li>
                    <NavLink to={'new-deceased-person'}>
                        <NewPersonButton as='li'/>
                    </NavLink>
                </ul>
            </nav>
            {popupIsOpen && <Popup onClose={setPopupIsOpenHandler} title={'Свяжитесь с нами'}>
                <ContactUs/>
            </Popup>}

        </>
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
        link: 'messenger',
        viewBox: '4 4.5 20 20',
        className: 'messengerWrapper',
    },
    {
        iconId: 'plaques',
        link: 'plaques',
        viewBox: '-1 -1 38 38',
        className: 'plaquesWrapper',
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