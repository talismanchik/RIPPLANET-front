import s from './userProfile.module.scss'
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {Icon} from "../../shared/ui/icon/icon.tsx";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {ArrowForward} from "../../shared/decorators/arrowForward/arrowForward.tsx";

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
                                <ArrowForward/>
                            </li>
                        </NavLink>
                        <NavLink
                            className={`${s.link} ${s.animation} ${location.pathname === '/userProfile/created-profiles' ? s.active : ''}`}
                            to={'created-profiles'}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'avatar'} viewBox={'-8 -8 35 35'}/>
                                    Созданные профили
                                </Typography>
                                <ArrowForward/>
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
                                <ArrowForward/>
                            </li>
                        </NavLink>
                        <NavLink
                            className={`${s.link} ${s.animation} ${location.pathname === '/userProfile/order-history' ? s.active : ''}`}
                            to={'order-history'}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'history'} className={s.fill}/>
                                    История Заказов
                                </Typography>
                                <ArrowForward/>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className={s.block}>
                    <Typography as='span' variant={'headline'}>Настройки</Typography>
                    <ul className={s.blockWrapper}>
                        <NavLink
                            className={`${s.link} ${s.animation} ${location.pathname === '/userProfile/notification' ? s.active : ''}`}
                            to={'notification'}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'notification'}/>
                                    Уведомления
                                </Typography>
                                <ArrowForward/>
                            </li>
                        </NavLink>
                        <NavLink
                            className={`${s.link} ${s.animation} ${location.pathname === '/userProfile/language' ? s.active : ''}`}
                            to={'language'}>
                            <li className={`${s.blockItem} `}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'language'}/>
                                    Язык
                                </Typography>
                                <div>
                                    <ArrowForward/>
                                </div>
                            </li>
                        </NavLink>
                        <NavLink
                            className={`${s.link} ${s.animation} ${location.pathname === '/userProfile/info' ? s.active : ''}`}
                            to={'info'}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'info'}/>
                                    Инфо
                                </Typography>
                                <ArrowForward/>
                            </li>
                        </NavLink>
                        <NavLink
                            className={`${s.link} ${s.animation} ${location.pathname === '/userProfile/black-list' ? s.active : ''}`}
                            to={'black-list'}>
                            <li className={`${s.blockItem}`}>
                                <Typography className={s.blockTitle} as='span'>
                                    <Icon iconId={'blackList'}/>
                                    Чёрный список
                                </Typography>
                                <ArrowForward/>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className={`${s.logout} ${s.animation}`}>
                    <Typography className={s.logoutTitle} as='span'>
                        <Icon iconId={'logout'} viewBox={'-2 -2 32 32'}/>
                        Выйти
                    </Typography>
                    <ArrowForward/>
                </div>
            </div>
            <div className={`${s.blockContainer} ${s.rightBlockContainer}`}>
                <Outlet/>
            </div>
        </div>
    );
};

