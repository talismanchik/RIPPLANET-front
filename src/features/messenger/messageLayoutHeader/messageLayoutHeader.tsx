import s from './messageLayoutHeader.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Icon} from "../../../shared/ui/icon/icon.tsx";

type Props = {
    avatar?: string
    title: string
    userStatus: string
    onClickContact: ()=>void
}
export const MessageLayoutHeader = ({onClickContact, avatar, title, userStatus}: Props) => {
    return (
        <div className={s.header}>
            <div onClick={onClickContact} className={s.leftBlock}>
                <div className={s.imageWrapper}>
                    {avatar
                        ? <img alt={'avatar'} src={avatar}/>
                        : <Icon iconId={'avatar'} viewBox={'-1.5 0 19 19'} width={'40'} height={'40'}/>
                    }
                </div>
                <div className={s.info}>
                    <Typography className={s.title}
                                variant={'head1'}>
                        {title}
                    </Typography>
                    <Typography className={s.userStatus}
                                variant={'footnote'}>{userStatus}</Typography>
                </div>
            </div>
            <div className={s.rightBlock}>
                <div className={s.iconWrapper}>
                    <Icon
                          height={'25'}
                          width={'25'}
                          viewBox={'-2.5 -2.5 35 35'}
                          iconId={'phone'}/>
                </div>
                <div className={s.iconWrapper}>
                    <Icon
                          height={'22'}
                          width={'22'}
                          viewBox={'0 0 31 31'}
                          iconId={'camera'}/>
                </div>
                <div className={s.iconWrapper}>
                    <Icon className={s.IconMore}
                          height={'25'}
                          width={'25'}
                          viewBox={'-1 0 25 25'}
                          iconId={'more'}/>
                </div>
            </div>
        </div>
    );
};

