import s from './contacts.module.scss'
import {ContactType} from "../../../pages/messenger/messengerData.tsx";
import {Icon} from "../../../shared/ui/icon/icon.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {MessageStatus} from "../../../shared/ui/messageStatus/messageStatus.tsx";

type Props = {
    contacts: ContactType[]
    onActive: (id: string) =>void
    id?: string
}
export const Contacts = ({contacts, onActive, id}: Props) => {
    return (
        <div className={`${s.contactsContainer}`}>
            {contacts.map(contact => {
                return (
                    <div onClick={()=>onActive(contact.id)} className={`${s.contact} ${id === contact.id? s.active : ''}`} key={contact.id}>
                        <div className={s.avatarWrapper}>
                            {contact.avatar
                                ? <img alt={'avatar'} src={contact.avatar}/>
                                : <Icon iconId={'avatar'} viewBox={'-1.5 0 19 19'} height={'56'} width={'56'}/>
                            }
                        </div>
                        <div className={s.contactInfo}>
                            <div className={s.contactContent}>
                                <Typography className={s.contactName} variant={'body2'}>
                                    {contact.name}
                                </Typography>
                                <Typography className={s.lastMessage} variant={'callouts'}>
                                    {contact.lastMessage}
                                </Typography>
                            </div>
                            <div className={s.contactInfoBlock}>
                                <div className={s.topBlock}>
                                    {contact.lastMessageStatus && <MessageStatus status={contact.lastMessageStatus}/>}
                                    <Typography className={s.lastVisitTime}
                                                variant={'footnote'}>
                                        {contact.lastVisit}
                                    </Typography>
                                </div>
                                <div className={s.bottomBlock}>
                                    {contact.unreadValue &&
                                        <div className={s.unreadValue}>
                                        <Typography variant={'caption1'}>
                                            {contact.unreadValue}
                                        </Typography>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>)
            })}
        </div>
    );
};

