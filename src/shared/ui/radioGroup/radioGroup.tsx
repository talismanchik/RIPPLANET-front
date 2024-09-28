import {OptionsType} from "../../../widgets/filter/filter.tsx";
import s from './radioGroup.module.scss'
import {Typography} from "../typography/typography.tsx";

type RadioGroupType={
    options: OptionsType[]
    value: string
    onchangeValue: (value: string)=>void
}
export const RadioGroup = ({options, onchangeValue, value}:RadioGroupType) => {
    return (
        <div className={s.radioGroupContainer}>
            {options.map(item=>{
                return <label className={s.label}>
                    <input type={'radio'} value={item.value} checked={item.value===value} onChange={()=>onchangeValue(item.value)}/>
                    <Typography variant={'body2'}>{item.title}</Typography>
                </label>
            })}
        </div>
    );
};

