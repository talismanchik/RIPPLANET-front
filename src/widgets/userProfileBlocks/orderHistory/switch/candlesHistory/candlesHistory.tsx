import s from './candlesHistory.module.scss'
import {Typography} from "../../../../../shared/ui/typography/typography.tsx";
import {Button} from "../../../../../shared/ui/button/button.tsx";

export const CandlesHistory = () => {
    return (
        <div className={s.candlesContainer}>
            <Typography className={s.textPlaceholder} variant={'titleSpecial'}>У Вас пока нет выполненных заказов!
                Оформите заказ на свечу на странице профиля или в разделе “свечи”.</Typography>
            <Button className={s.button}>
                <Typography as='span'>Заказать свечу</Typography>
            </Button>
        </div>
    );
};

