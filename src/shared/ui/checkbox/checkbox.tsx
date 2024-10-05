import s from './checkbox.module.scss'
import {Typography} from "../typography/typography.tsx";
import {Icon} from "../icon/icon.tsx";

type Props = {
    title?: string
    checked: boolean
    onChecked: () => void
    className?: string
}
export const Checkbox = ({className, title, onChecked, checked}: Props) => {
    return (
        <div onClick={onChecked} className={`${s.checkboxContainer} ${className}`}>
            <div className={s.checkboxWrapper}>
                {checked
                    ?<Icon iconId={'checkboxTrue'} width={'20'} height={'20'} viewBox={'0 0 21 21'}/>
                    :<Icon className={s.checkedFalse} iconId={'checkboxFalse'} width={'20'} height={'20'} viewBox={'0 0 21 21'}/>
            }
            </div>
            <Typography className={s.title} variant={'body2'}>{title}</Typography>
        </div>
    );
};

