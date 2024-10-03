import s from './notification.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Switch} from "../../../shared/ui/switch/switch.tsx";

export const Notification = () => {
    return (
        <div className={s.notificationContainer}>
            <Typography as='span' variant={'head1'}>
                Уведомления
            </Typography>
            <div className={`${s.togglesWrapper}`}>
                <div className={`${s.toggleWrapper}`}>
                    <Typography variant={'body1'}>
                        Получать SMS-уведомления
                    </Typography>
                    <Switch/>
                </div>
                <div className={`${s.toggleWrapper}`}>
                    <Typography variant={'body1'}>
                        Получать PUSH-уведомления
                    </Typography>
                    <Switch/>
                </div>
                <div className={`${s.toggleWrapper}`}>
                    <Typography variant={'body1'}>
                        Получать рассылку по E-mail                    </Typography>
                    <Switch/>
                </div>
            </div>
        </div>
    );
};

