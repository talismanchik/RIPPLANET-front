import s from './messenger.module.scss'
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {Input} from "../../shared/ui/input/input.tsx";
import {ArrowBack} from "../../shared/decorators/arrowBack/arrowBack.tsx";
import {Contacts} from "../../widgets/messenger/contacts/contacts.tsx";
import {contacts} from "./messengerData.tsx";
import {useState} from "react";
import {MessagesLayout} from "../../widgets/messenger/messesLayout/messagesLayout.tsx";

export const Messenger = () => {
    const [activeId, setActiveId] = useState<string | undefined>(undefined)
    return (
        <div className={s.messengerContainer}>
            <div className={s.contactsContainer}>
                <ArrowBack className={s.arrowBack}/>
                <div className={s.header}>
                    <Typography className={s.title} variant={'largeTitle1'}>Сообщения</Typography>
                    <Input className={s.search} variant={'searchDecoration'}
                           placeholder={'Поиск'}
                    />
                </div>
                <Contacts contacts={contacts} id={activeId} onActive={setActiveId}/>
            </div>
            <div className={s.contentContainer}>
                <MessagesLayout/>
            </div>
        </div>
    );
};

