import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'



import s from './typography.module.scss'

type Props<T extends ElementType> = {
    as?: T
    children?: ReactNode
    className?: string
    variant?:
        | 'largeTitle1'
        | 'largeTitle2'
        | 'title'
        | 'titleSpecial'
        | 'titleSpecialBold'
        | 'headline'
        | 'body1'
        | 'body2'
        | 'callouts'
        | 'head'
        | 'head1'
        | 'subhead'
        | 'head2'
        | 'footnote'
        | 'caption1'
        | 'caption2'
        | 'tab'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: Props<T>) => {
    const { as: Component = 'p', className, variant = 'body1', ...rest } = props

    return <Component className={`${s[variant]} ${className}`} {...rest} />
}
