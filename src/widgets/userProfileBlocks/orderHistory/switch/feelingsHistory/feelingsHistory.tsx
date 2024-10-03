 import s from './feelingsHistory.module.scss'
 import {Typography} from "../../../../../shared/ui/typography/typography.tsx";
 import {Button} from "../../../../../shared/ui/button/button.tsx";
export const FeelingsHistory = () => {
    return (
        <div className={s.feelingsContainer}>
            <Typography className={s.textPlaceholder} variant={'titleSpecial'}>
                У Вас пока нет выполненных заказов! Оформите заказ на чувство на странице профиля или в разделе “чувства”.            </Typography>
            <Button className={s.button}>
                <Typography as='span'>
                    Заказать чувство
                </Typography>
            </Button>
        </div>
    );
};

