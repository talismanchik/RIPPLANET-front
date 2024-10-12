import s from './footer.module.scss'
import {Icon} from "../../shared/ui/icon/icon.tsx";
import {Link, useLocation} from "react-router-dom";
import {NewPersonButton} from "../../shared/decorators/newPersonButton/newPersonButton.tsx";
import {useState} from "react";
import {BurgerButton} from "../../shared/decorators/burgerButton/burgerButton.tsx";

export const Footer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    return (
        <footer className={s.navigateContainer}>
            <ul className={s.itemsContainer}>
                <Link to={'home'} className={`${s.iconWrapper} ${location.pathname === '/home' ? s.active : ''}`}>
                    <li>
                        <Icon iconId={"home"} width={'22'} height={'22'} viewBox={'0 0 38 38'}/>
                    </li>
                </Link>
                <Link to={'candles'} className={`${s.iconWrapper} ${location.pathname === '/candles' ? s.active : ''}`}>
                    <li>
                        <Icon iconId={"candle"} width={'22'} height={'22'} viewBox={'0 0 28 28'}/>
                    </li>
                </Link>
                <Link to={'/create-profile'}>
                    <li>
                        <NewPersonButton/>
                    </li>
                </Link>
                <Link to={'/profiles-with-like'}
                      className={`${s.iconWrapper} ${location.pathname === '/profiles-with-like' ? s.active : ''}`}>
                    <li>
                        <Icon iconId={"like"} width={'22'} height={'22'} viewBox={'0 -3 40 40'}/>
                    </li>
                </Link>
                <li >
                    <BurgerButton isActive={isOpen} setIsActive={setIsOpen}/>
                </li>
            </ul>
        </footer>
    );
};

