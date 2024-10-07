import s from './messagesLayoutFooter.module.scss'
import {Icon} from "../../../shared/ui/icon/icon.tsx";
import {Input} from "../../../shared/ui/input/input.tsx";
import {ChangeEvent} from "react";

type Props = {
    value: string
    onChangeValue: (value: string) => void
}
export const MessagesLayoutFooter = ({value, onChangeValue}: Props) => {
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e.currentTarget.value)
    }

    return (
        <div className={s.footerContainer}>
            <div className={`${s.iconWrapper}`}>
                <Icon iconId={'clip'} viewBox={'-3.5 -3.5 35 35'}/>
            </div>
            <Input value={value} onChange={(e) => onChangeValueHandler(e)} placeholder={'Сообщение'}/>
            <div className={`${s.iconWrapper} ${value !== '' ? s.accentBg : ''}`}>
                {value !== ''
                    ? <Icon iconId={'sendMessage'} viewBox={'4 4 35 35'}/>
                    : <Icon iconId={'microphone'} viewBox={'-3.5 -3.5 35 35'}/>

                }
            </div>
        </div>
    );
};

