import s from './contactInformPopup.module.scss'
import {Popup} from "../../../widgets/popup/popup.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Icon} from "../../../shared/ui/icon/icon.tsx";
import {Switch} from "../../../shared/ui/switch/switch.tsx";
import {ArrowForward} from "../../../shared/decorators/arrowForward/arrowForward.tsx";

type Props = {
    onclose: () => void
    avatar: string
    nickName: string
    name: string
}
export const ContactInformPopup = ({onclose, name, nickName, avatar}: Props) => {
    return (
        <Popup title={'Информация'} onClose={onclose}>
            <div className={s.children}>
                <div className={s.topBlock}>
                    <div className={s.avatarWrapper}>
                        <img alt={'avatar'} src={avatar}/>
                    </div>
                    <Typography variant={'title'}>{name}</Typography>
                    <Typography className={s.nickName} variant={'titleSpecial'}>{nickName}</Typography>
                </div>
                <div className={`${s.block} ${s.blockItem}`}>
                    <div className={s.iconWrapper}>
                        <Icon iconId={'notification'} viewBox={'-1 0 30 30'}/>
                    </div>
                    <Typography className={s.title} variant={'body1'}>
                        Уведомления
                    </Typography>
                    <Switch/>
                </div>
                <div className={`${s.block}`}>
                    <div className={`${s.blockItem}`}>
                        <div className={s.iconWrapper}>
                            <Icon iconId={'complain'} viewBox={'-1 -1 30 30'}/>
                        </div>
                        <Typography className={s.title}
                                    variant={'body1'}>
                            Пожаловаться
                        </Typography>
                        <ArrowForward/>
                    </div>
                    <div className={s.separator}></div>
                    <div className={`${s.blockItem}  ${s.redColor}`}>
                        <div className={s.iconWrapper}>
                            <Icon iconId={'blackList'}  viewBox={'-1 -1 30 30'}/>
                        </div>
                        <Typography className={s.title}
                                    variant={'body1'}>
                            В черном списке
                        </Typography>
                        <ArrowForward/>
                    </div>
                </div>
                <div className={`${s.block} ${s.blockItem} ${s.redColor}`}>
                    <div className={s.iconWrapper}>
                        <Icon iconId={'delete'}  viewBox={'-1 -1 30 30'}/>
                    </div>
                    <Typography className={s.title}
                                variant={'body1'}>
                        Удалить чат
                    </Typography>
                    <ArrowForward/>
                </div>
                <button className={s.closeButton} onClick={onclose}>
                    <Typography className={s.titleButton} variant={'body1'}>
                        Закрыть
                    </Typography>
                </button>
            </div>
        </Popup>
    );
};

