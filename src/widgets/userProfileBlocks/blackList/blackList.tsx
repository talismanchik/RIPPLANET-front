 import s from './blackList.module.scss'
 import {Typography} from "../../../shared/ui/typography/typography.tsx";
export const BlackList = () => {
    return (
        <div className={s.blackListContainer}>
            <Typography as='span' variant={'head1'}>Черный список</Typography>
        <div className={s.content}>
            <Typography className={s.contentPlaceholder} variant={'titleSpecial'}>Черный список пуст</Typography>
        </div>
        </div>
    );
};

