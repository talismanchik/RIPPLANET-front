import s from './cross.module.scss'
import {ComponentPropsWithoutRef} from "react";

type CrossType = {
    onClose: ()=>void
    className?: string
} & ComponentPropsWithoutRef<'button'>
export const Cross = ({onClose, className, ...restProps}:CrossType) => {
    return (
        <button type={'button'} className={`${s.cross} ${className}`} onClick={onClose} {...restProps}></button>
    );
};

