 import s from './switch.module.scss'
export const Switch = () => {
    return (
        <label className={s.switch}>
            <input type={'checkbox'}/>
            <span className={s.move}></span>
        </label>
    );
};

