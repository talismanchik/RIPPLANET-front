import s from './messesLayout.module.scss'
import {MessageLayoutHeader} from "../../../features/messenger/messageLayoutHeader/messageLayoutHeader.tsx";
import girl from '../../../assets/images/accaunts/girl.png'
import {MessagesLayoutFooter} from "../../../features/messenger/messagesLayoutFooter/messagesLayoutFooter.tsx";
import {useState} from "react";
import {MessageList} from "../../../features/messenger/messageList/messageList.tsx";
import {ContactInformPopup} from "../../../features/messenger/popup/contactInformPopup.tsx";

export const MessagesLayout = () => {
    const [textMessage, setTextMessage] = useState<string>('')
    const [isOpenContactInformPopup, setIsOpenContactInformPopup] = useState<boolean>(false)
    const onOpenContactInformPopupHandler = ()=>{
        setIsOpenContactInformPopup(true)
    }
    const onCloseContactInformPopupHandler = ()=>{
        setIsOpenContactInformPopup(false)
    }

    return (
        <>
            <MessageLayoutHeader onClickContact={onOpenContactInformPopupHandler}
                                 avatar={girl}
                                 userStatus={'был(а) в сети 5 минут назад'}
                                 title={'Вероника Георгиева'}/>
            <div className={s.transition}>
                <MessageList list={messageList}/>
                <MessagesLayoutFooter value={textMessage} onChangeValue={setTextMessage}/>
            </div>
            {isOpenContactInformPopup &&
               <ContactInformPopup avatar={girl}
                                   name={'Вероника Георгиева'}
                                   nickName={'@vika22'}
                                   onclose={onCloseContactInformPopupHandler}/>
            }
        </>
    );
};

export type MessageType = {
    isMyMessage: boolean
    avatar?: string
    messageText: string
    time: string
    messageStatus?: 'read' | 'send'
}

const messageList: MessageType[] = [
    {
        messageText: 'Мы в театре. Его любимый',
        time: '18:02',
        isMyMessage: true,
        messageStatus: 'send'
    },
    {
        messageText: 'Его любимый самый досуг.',
        time: '18:02',
        isMyMessage: true,
        messageStatus: 'send'
    },
    {
        avatar: girl,
        messageText: 'Мы в театре',
        time: '18:02',
        isMyMessage: false,
    },
    {
        messageText: 'Мы в театре. Его любимый',
        time: '18:02',
        isMyMessage: true,
        messageStatus: 'read'
    },
    {
        messageText: 'Мы в театре',
        time: '18:02',
        isMyMessage: true,
        messageStatus: 'read'
    },
]

