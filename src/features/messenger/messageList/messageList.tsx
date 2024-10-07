import s from './messageList.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {MessageType} from "../../../widgets/messenger/messesLayout/messagesLayout.tsx";
import {Icon} from "../../../shared/ui/icon/icon.tsx";

type Props = {
    list: MessageType[]
}
export const MessageList = ({list}: Props) => {
    return (
        <div className={s.messageListContainer}>
            <div className={s.messageDateGroup}>
                <Typography as='div' className={s.dateMessage} variant={"footnote"}>
                    28 июня
                </Typography>
                {list.map(item => {
                    return (
                        <div className={`${s.message} ${item.isMyMessage ? s.myMessage : ''}`}>
                            {
                                !item.isMyMessage &&
                                <div className={`${s.avatarWrapper}`}>
                                    <img alt={'avatar'} src={item.avatar}/>
                                </div>
                            }
                            <div className={s.messageContentWrapper}>
                                <div className={`${s.messageContent}`}>
                                    <div>
                                        {item.messageText}
                                    </div>
                                    <div>
                                        {item.time}
                                    </div>
                                </div>
                                <div className={`${s.settings}`}>
                                    <div className={s.iconWrapper}>
                                        <Icon iconId={'more'}
                                              height={'25'}
                                              width={'25'}
                                              viewBox={'-1 0 25 25'}/>
                                    </div>

                                    <div className={s.iconWrapper}>
                                        <Icon iconId={'answer'}
                                              height={'25'}
                                              width={'25'}
                                              viewBox={'6 8 25 25'}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    );
};

