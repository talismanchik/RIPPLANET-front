import s from './messesLayout.module.scss'
import {MessageLayoutHeader} from "../../../features/messenger/messageLayoutHeader/messageLayoutHeader.tsx";
import girl from '../../../assets/images/accaunts/girl.png'
import {MessagesLayoutFooter} from "../../../features/messenger/messagesLayoutFooter/messagesLayoutFooter.tsx";
export const MessagesLayout = () => {
    return (
        <>
            <MessageLayoutHeader avatar={girl}
                                 userStatus={'был(а) в сети 5 минут назад'}
                                 title={'Вероника Георгиева'}/>
            <div className={s.transition}>
                <div className={s.messageList}>

                </div>
                <MessagesLayoutFooter/>
            </div>
        </>
    );
};


