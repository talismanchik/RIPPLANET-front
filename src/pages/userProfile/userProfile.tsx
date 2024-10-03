import s from './userProfile.module.scss'
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {Icon} from "../../shared/ui/icon/icon.tsx";
import {NavLink, Outlet, useLocation} from "react-router-dom";

export const UserProfile = () => {
    const location = useLocation();
    return (
        <div className={s.userProfileContainer}>
            <div className={`${s.blockContainer} ${s.leftBlockContainer}`}>
                <div className={s.linkToBack}>
                    <div className={s.arrowBack}></div>
                    <Typography variant={'body2'}>
                        Вернуться
                    </Typography>
                </div>
                <Typography className={s.title} as='span' variant={'largeTitle1'}>
                    Личный кабинет
                </Typography>
                <div className={s.block}>
                    <Typography as='span' variant={'headline'}>Основное</Typography>
                    <ul className={s.blockWrapper}>
                        <NavLink
                            className={`${s.link} ${s.animation} ${location.pathname === '/userProfile/edit-profile' ? s.active : ''}`}
                            to={'edit-profile'}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'correcter'} width={'35'} height={'35'} viewBox={'5 5 45 45'}/>
                                    Редактировать профиль
                                </Typography>
                                <div className={s.arrowForward}></div>
                            </li>
                        </NavLink>
                        <NavLink
                            className={`${s.link} ${s.animation} ${location.pathname === '/userProfile/created-profiles' ? s.active : ''}`}
                            to={'created-profiles'}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'avatar'} viewBox={'-8 -8 35 35'}/>
                                    Созданные рпофили
                                </Typography>
                                <div className={s.arrowForward}></div>
                            </li>
                        </NavLink>
                        <NavLink
                            className={`${s.link} ${s.animation} ${location.pathname === '/userProfile/payment' ? s.active : ''}`}
                            to={'payment'}>
                            <li className={`${s.blockItem} `}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'payment'} className={s.fill}/>
                                    Оплата
                                </Typography>
                                <div className={s.arrowForward}></div>
                            </li>
                        </NavLink>
                        <a className={`${s.link} ${s.animation}`}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'history'} className={s.fill}/>
                                    История Заказов
                                </Typography>
                                <div className={s.arrowForward}></div>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className={s.block}>
                    <Typography as='span' variant={'headline'}>Настройки</Typography>
                    <ul className={s.blockWrapper}>
                        <a className={`${s.link} ${s.animation}`}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'notification'}/>
                                    Уведомления
                                </Typography>
                                <div className={s.arrowForward}></div>
                            </li>
                        </a>
                        <a className={`${s.link} ${s.animation}`}>
                            <li className={`${s.blockItem} `}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'language'}/>
                                    Язык
                                </Typography>
                                <div>
                                    <div className={s.arrowForward}></div>
                                </div>
                            </li>
                        </a>
                        <a className={`${s.link} ${s.animation}`}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'info'}/>
                                    Инфо
                                </Typography>
                                <div className={s.arrowForward}></div>
                            </li>
                        </a>
                        <a className={`${s.link} ${s.animation}`}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'blackList'}/>
                                    Чёрный список
                                </Typography>
                                <div className={s.arrowForward}></div>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className={`${s.logout} ${s.animation}`}>
                    <Typography className={s.logoutTitle} as='span'>
                        <Icon iconId={'logout'} viewBox={'-2 -2 32 32'}/>
                        Выйти
                    </Typography>
                    <div className={s.arrowForward}></div>
                </div>
            </div>
            <div className={`${s.blockContainer} ${s.rightBlockContainer}`}>
                <Outlet/>
            </div>
        </div>
    );
};

