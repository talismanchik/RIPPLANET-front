import s from './editProfile.module.scss'
import userProfileStyle from '../../../pages/userProfile/userProfile.module.scss'
import {Icon} from "../../../shared/ui/icon/icon.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {ArrowForward} from "../../../shared/decorators/arrowForward/arrowForward.tsx";

export const EditProfile = () => {
    return (
        <>
            <div className={s.avatarWrapper}>
                <div className={s.avatar}>
                    <Icon iconId={'avatar'} width={'50'} height={'50'} viewBox={'-1.5 0 19 19'}/>
                    <div className={s.footerAvatar}>
                        <Icon iconId={'photo'} height={'20'} width={'20'} viewBox={'3 3 18 18'}/>
                    </div>
                </div>

            </div>
            <div className={s.block}>
                <Typography as='span' variant={'headline'}>Имя</Typography>
                <div className={`${s.blockWrapper} ${s.blockItem} ${userProfileStyle.animation}`}>
                    <Typography className={userProfileStyle.blockTitle} as='span'>
                        Нестеренко Евгений
                    </Typography>
                    <ArrowForward/>
                </div>
            </div>
            <div className={s.block}>
                <Typography as='span' variant={'headline'}>
                    Контактные данные
                </Typography>
                <ul className={s.blockWrapper}>
                    <li className={`${s.blockItem} ${userProfileStyle.animation}`}>
                        <div className={`${s.titleItemWrapper}`}>
                            <Typography className={`${s.titleItemLabel}`}
                                        as='span'
                                        variant={'subhead'}>
                                E-mail
                            </Typography>
                            <Typography as='span'
                                        variant={'body1'}>
                                talismanchik.by@gmail.com
                            </Typography>
                        </div>
                        <ArrowForward/>
                    </li>
                    <li className={`${s.blockItem} ${userProfileStyle.animation}`}>
                        <div className={`${s.titleItemWrapper}`}>
                            <Typography className={`${s.titleItemLabel}`}
                                        as='span'
                                        variant={'subhead'}>
                                Телефон
                            </Typography>
                            <Typography as='span'
                                        variant={'body1'}>
                                +375 29 5244116
                            </Typography>
                        </div>
                        <ArrowForward/>
                    </li>
                </ul>
            </div>
            <div className={s.block}>
                <Typography as='span' variant={'headline'}>
                    Имя пользователя
                </Typography>
                <div className={`${s.blockWrapper} ${s.blockItem} ${userProfileStyle.animation}`}>
                    <Typography className={userProfileStyle.blockTitle} as='span'>
                        Нестеренко Евгений
                    </Typography>
                    <ArrowForward/>
                </div>
            </div>
            <div className={s.block}>
                <Typography as='span' variant={'headline'}>Пароль</Typography>
                <div className={`${s.blockWrapper} ${s.blockItem} ${userProfileStyle.animation}`}>
                    <Typography className={userProfileStyle.blockTitle} as='span'>
                        ● ● ● ● ● ● ● ●
                    </Typography>
                    <ArrowForward/>
                </div>
            </div>
            <button className={s.deleteAccount}>
                <Typography as='span' variant={'footnote'}>
                    Удалить аккаунт
                </Typography>
            </button>
        </>
    )
};

