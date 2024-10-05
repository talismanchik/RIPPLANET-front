import {OptionsType} from "../../../widgets/filter/filter.tsx";
import s from './radioGroup.module.scss'
import {Typography} from "../typography/typography.tsx";

type RadioGroupType={
    options: OptionsType[]
    value: string
    onchangeValue: (value: string)=>void
    className?: string
}
export const RadioGroup = ({className, options, onchangeValue, value}:RadioGroupType) => {
    return (
        <div className={`${s.radioGroupContainer} ${className}`}>
            {options.map(item=>{
                return <label key={item.value} className={s.label}>
                    <input type={'radio'} value={item.value} checked={item.value===value} onChange={()=>onchangeValue(item.value)}/>
                    <Typography variant={'body2'}>{item.title}</Typography>
                </label>
            })}
        </div>
    );
};

