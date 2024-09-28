import s from './burgerButton.module.scss'

type BurgerButtonType = {
    isActive: boolean
    setIsActive: (isOpen: boolean) => void
}
export const BurgerButton = ({isActive, setIsActive}: BurgerButtonType) => {
    const setIsActiveHandler = () => {
        setIsActive(!isActive)
    }

    return (
        <div onClick={setIsActiveHandler} className={`${s.burgerButtonWrapper} ${isActive ? s.active : ''}`}>
            <span></span>
        </div>
    );
};
