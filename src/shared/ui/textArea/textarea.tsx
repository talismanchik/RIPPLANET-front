import {ComponentPropsWithoutRef, forwardRef} from "react";
import {Typography} from "../typography/typography.tsx";
import s from './textArea.module.scss'

type TextAreaType = {
    label?: string
    className?: string
} & ComponentPropsWithoutRef<'textarea'>
export const Textarea =  forwardRef<HTMLTextAreaElement, TextAreaType>(({label, className, ...restProps}, ref) => {
    return (
        <div className={`${s.textareaContainer} ${className}`}>
            {label && <Typography as='div' variant={'body2'} className={s.label}>{label}</Typography>}
            <div className={s.textareaWrapper}>
                <textarea className={s.textarea} ref={ref} {...restProps}/>
            </div>
        </div>
    );
})

