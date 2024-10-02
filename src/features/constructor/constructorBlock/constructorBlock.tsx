import {ReactNode} from "react";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import s from './constructorBlock.module.scss'

type Props = {
    children: ReactNode
    className?: string
    title: string
 }
export const ConstructorBlock = ({title, children, className}:Props) => {
    return (
        <div className={`${s.constructorBlock} ${className}`}>
            <Typography className={s.blockTitle} variant={"head1"}>{title}</Typography>
            {children}
        </div>
    );
};

