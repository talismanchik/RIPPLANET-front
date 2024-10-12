import s from './memoryWall.module.scss'
import {PostHeader} from "../postHeader/postHeader.tsx";
import avatar from '../../../assets/images/accaunts/koby.jpg'
import {Icon} from "../../../shared/ui/icon/icon.tsx";
import {useState} from "react";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Input} from "../../../shared/ui/input/input.tsx";
import foto1 from '../../../assets/images/content/photoForPost1.png'
import foto2 from '../../../assets/images/content/photoForPost2.png'

export const Post = () => {
    const [addLike, setAddLike] = useState(false)
    const [addComment, setAddComment] = useState(false)
    return (
        <div className={`${s.postContainer}`}>
            <div className={s.postHeader}>
                <PostHeader avatar={avatar}/>
                <div className={s.toolsContainer}>
                    <div className={`${s.iconContainer} ${s.iconOnHover}`}>
                        <Icon iconId={'complain'} height={'19'} width={'19'} viewBox={'4.5 4.5 19 19'}/>
                    </div>
                    <div className={`${s.iconContainer} `}>
                        <Icon iconId={'share_arrow'} height={'19'} width={'19'} viewBox={'0 0 22 22'}/>
                    </div>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.mediaContainer}>
                    <div className={s.postPhotoWrapper}>
                        <img alt={'photo'} src={foto1}/>
                    </div>
                    <div className={s.postPhotoWrapper}>
                        <img alt={'photo'} src={foto2}/>
                    </div>
                </div>
                <div>
                    <Typography variant={'body1'}>
                        Мы в театре. Его любимый досуг.
                    </Typography>
                </div>
            </div>
            <div className={s.footerContent}>
                <div className={s.iconsWrapper}>


                    <div onClick={() => {
                        setAddLike(!addLike)
                    }}
                         className={`${s.iconContainer} ${s.like}`}>
                        <Icon iconId={'like'}
                              height={'14'}
                              width={'14'}
                              viewBox={'0 -5 40 40'}/>
                        {addLike &&
                            <div className={s.countIcon}>
                                <Typography variant={'footnote'}>{addLike ? '1' : ''}</Typography>
                            </div>
                        }
                    </div>
                    <div onClick={() => {
                        setAddComment(!addComment)
                    }}
                         className={`${s.iconContainer} `}>
                        <Icon iconId={'messenger'}
                              height={'14'}
                              width={'14'}
                              viewBox={'4 4.5 20 20'}/>
                        {addComment &&
                            <div className={s.countIcon}>
                                <Typography variant={'footnote'}>{addComment ? '1' : ''}</Typography>
                            </div>
                        }
                    </div>
                </div>
                <Typography className={s.answer} variant={'subhead'}>Ответить</Typography>
            </div>
            <div className={s.addCommentContainer}>
                <Input className={s.input} placeholder={'Добавьте комментарий ...'}/>
            </div>
        </div>
    );
};

