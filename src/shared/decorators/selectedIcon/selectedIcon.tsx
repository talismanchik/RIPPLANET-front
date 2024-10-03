import s from './selectedIcon.module.scss'

type SelectedIconType = {
    className?: string
}
export const SelectedIcon = ({className}:SelectedIconType) => {
    return (
        <div className={`${s.selectedIcon} ${className}`}>
        </div>
    );
};

