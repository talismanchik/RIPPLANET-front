import s from './messageStatus.module.scss'

type Props = {
    status: 'send' | 'read'
}
export const MessageStatus = ({status}: Props) => {
        return (
            <div
                className={`${s.messageSend} ${status === 'read'
                    ? s.messageRead
                    : ''}`}></div>

        )
            ;
    }
;

