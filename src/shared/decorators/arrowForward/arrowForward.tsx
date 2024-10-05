import s from './arrowForward.module.scss'
type Props = {
    className?: string
}
export const ArrowForward = ({className}: Props) => {
    return (
        <div className={`${s.arrowForward} ${className}`}></div>

    );
};

