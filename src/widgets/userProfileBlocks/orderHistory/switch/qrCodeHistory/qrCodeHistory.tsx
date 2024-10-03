import s from './qrCodeHistory.module.scss'
import {Typography} from "../../../../../shared/ui/typography/typography.tsx";
import {Button} from "../../../../../shared/ui/button/button.tsx";

export const QrCodeHistory = () => {
    return (
        <div className={s.qrCodeContainer}>
            <Typography className={s.textPlaceholder} variant={'titleSpecial'}>
                У Вас пока нет выполненных заказов! Оформите заказ на Qr-кода, благодаря которому память об умерших
                любимых будет жить вечно!
            </Typography>
            <Button className={s.button}>
                <Typography as='span'>Заказать медальон</Typography>
            </Button>
        </div>
    );
};

