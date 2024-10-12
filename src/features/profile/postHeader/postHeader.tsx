import s from './postHeader.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";

type Props = {
    avatar: string
}
export const PostHeader = ({avatar}:Props) => {
    return (
        <div>
            <div className={s.header}>
                <div className={s.imgWrapper}>
                    <img alt={'avatar'} src={avatar}/>
                </div>
                <div className={s.contentHeader}>
                    <Typography variant={"subhead"}>
                        vika2
                    </Typography>
                    <Typography className={s.time} variant={"subhead"}>
                        2 ч. назад
                    </Typography>
                </div>
            </div>
        </div>
    );
};

