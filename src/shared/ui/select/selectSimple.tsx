import s from './selectSimple.module.scss'
import {OptionsType} from "../../../widgets/filter/filter.tsx";
import {Typography} from "../typography/typography.tsx";
import {Icon} from "../icon/icon.tsx";
import {useState} from "react";
import * as React from "react";

type SelectSimpleType = {
    className?: string
    placeholder?: string
    options: OptionsType[]
    value: string
    onChange: (value: string) => void
}
export const SelectSimple = ({options, className, placeholder, onChange, value}: SelectSimpleType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const setIsOpenHandler = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    const onChangeValueHandler = (value: string)=>{
        setIsOpen(false)
        onChange(value)
    }

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            setIsOpenHandler()
        }
    };

    const selectTitle = options.find(el=>el.value === value)?.title
    return (
        <>
            <div data-isOpen={isOpen} className={`${s.selectContainer} ${className}`}>
                <div className={s.trigger} onClick={setIsOpenHandler}>
                    <Typography>{value ?  selectTitle : placeholder}</Typography>
                    <Icon className={s.svg} iconId={'arrow_down'} viewBox={'-4 -5 32 32'} width={'28px'}
                          height={'28px'}/>
                </div>
                {isOpen &&
                    <>
                        <div className={s.contentWrapper} onClick={handleOverlayClick}>
                            <ul className={s.content}>
                                {options.map(item => {
                                    return <li className={s.selectItem} onClick={()=>onChangeValueHandler(item.value)}><Typography
                                        variant={'body2'}>{item.title}</Typography>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div data-isOpen={isOpen} className={s.onBlur} onClick={handleOverlayClick}></div>
                    </>}
            </div>

        </>
    );
};

