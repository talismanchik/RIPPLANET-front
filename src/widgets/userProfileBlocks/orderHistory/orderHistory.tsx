import s from './orderHistory.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {NavLink, Outlet, useLocation} from "react-router-dom";

export const OrderHistory = () => {
    const location = useLocation()
    return (
        <div className={s.orderHistoryContainer}>
            <Typography as='span' variant={'head1'}>История заказов</Typography>
            <div className={s.switch}>
                <NavLink to={'candles'} className={`${s.link} ${location.pathname === '/userProfile/order-history/candles'? s.active : ''}`}>
                    <Typography as='span' variant={'body1'}>
                        Свечи
                    </Typography>
                </NavLink>
                <NavLink to={'feelings'} className={`${s.link}  ${location.pathname === '/userProfile/order-history/feelings'? s.active : ''}`}>
                    <Typography as='span' variant={'body1'}>
                        Чувства
                    </Typography>
                </NavLink>
                <NavLink to={'qr-code'} className={`${s.link} ${location.pathname  === '/userProfile/order-history/qr-code'? s.active : ''}`}>
                    <Typography as='span' variant={'body1'}>
                        Заказы
                    </Typography>
                </NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

