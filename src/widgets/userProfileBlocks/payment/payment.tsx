import s from './payment.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Icon} from "../../../shared/ui/icon/icon.tsx";
export const Payment = () => {
    return (
        <div className={s.paymentContainer}>
            <Typography as='span' variant={"head1"}>Способ оплаты</Typography>
            <div className={s.content}>

            </div>
            <div className={s.newCard}>
                <Typography className={s.newCardTitle} as='span' variant={'body1'}>
                    <Icon iconId={'card'} viewBox={'12.2 13 25 25'}/>
                    Новая карта
                </Typography>
            </div>
        </div>
    );
};

