import s from './newPersonButton.module.scss';
import { ComponentPropsWithoutRef, ElementType } from "react";

type NewPersonButtonType<T extends ElementType = 'div'> = {
    as?: T;
    className?: string;
} & ComponentPropsWithoutRef<T>;

export const NewPersonButton = <T extends ElementType = 'div'>(props: NewPersonButtonType<T>) => {
    const { as: Component = 'div', className, ...rest } = props;
    return (
        <Component className={`${s.newPersonWrapper} ${className}`} {...rest}></Component>
    );
};

