import s from './profileWall.module.scss'
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {Typography} from "../../../shared/ui/typography/typography.tsx";

export const ProfileWall = () => {
    const location = useLocation()
    return (
        <div className={s.profileWallContainer}>
            <div className={s.wrapper}>
                <ul className={s.navigate}>
                    <NavLink to={'candles'}
                             className={`${s.navigateItem} 
                         ${location.pathname === `/profile/candles` ? s.active : ''}`}>
                        <li>
                            <Typography variant={'body2'}>
                                Свечи
                            </Typography>
                        </li>
                    </NavLink>
                    <NavLink to={'feelings'}
                             className={`${s.navigateItem}
                          ${location.pathname === `/profile/feelings` ? s.active : ''}`}>
                        <li>
                            <Typography variant={'body2'}>
                                Чувства
                            </Typography>
                        </li>
                    </NavLink>
                    <NavLink to={'memory'}
                             className={`${s.navigateItem} 
                         ${location.pathname === `/profile/memory` ? s.active : ''}`}>
                        <li>
                            <Typography variant={'body2'}>
                                Стена пямяти
                            </Typography>
                        </li>
                    </NavLink>
                </ul>
                <Outlet/>
            </div>
        </div>

    )
        ;
};

