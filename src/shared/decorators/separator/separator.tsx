import s from './separator.module.scss'

type Props = {
    className?: string
}
export const Separator = ({className}:Props) => {
    return (
        <div className={`${s.separator} ${className}`}>
        </div>
    );
};

