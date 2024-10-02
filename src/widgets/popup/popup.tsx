import {ReactNode} from "react";
import s from './popup.module.scss'
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {Cross} from "../../shared/decorators/cross/cross.tsx";
import * as React from "react";

type PopupType = {
    children: ReactNode
    title: string
    onClose: () => void
}
export const Popup = ({children, title, onClose}: PopupType) => {

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    };
    return (
        <div onClick={handleOverlayClick} className={s.popup}>
            <div className={s.overflow}>
                <div className={s.popupWrapper}>
                    <div className={s.header}>
                        <Typography className={s.title} variant={'title'}>{title}</Typography>
                        <Cross className={s.cross} onClose={onClose}/>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

