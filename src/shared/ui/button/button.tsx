import {ComponentPropsWithoutRef, ElementType} from "react";
import s from './button.module.scss'

type Props<T extends ElementType = 'button'> = {
    as?: T
    className?: string
    variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

    return <Component className={`${s.button} ${s[variant]} ${className}`} {...rest} />
}

