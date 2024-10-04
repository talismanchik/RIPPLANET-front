import s from './step3.module.scss'
import {Button} from "../../../shared/ui/button/button.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {SelectSimple} from "../../../shared/ui/select/selectSimple.tsx";
import {
    dateOfBirthdaySelect,
    dateOfDeadSelect,
    monthOfBirthdaySelect, monthOfDeadSelect,
    yearOfBirthdaySelect, yearOfDeadSelect
} from "../../filter/filter.tsx";
import {useState} from "react";
import {Input} from "../../../shared/ui/input/input.tsx";
import {Checkbox} from "../../../shared/ui/checkbox/checkbox.tsx";

type Props = {
    onChangeStage: (nextStage: number) => void
}

export const Step3 = ({onChangeStage}: Props) => {
    const [dateOfBirthday, setDateOfBirthday] = useState('')
    const [dateOfDead, setDateOfDead] = useState('')
    const [monthOfBirthday, setMonthOfBirthday] = useState('')
    const [monthOfDead, setMonthOfDead] = useState('')
    const [yearOfBirthday, setYearOfBirthday] = useState('')
    const [yearOfDead, setYearOfDead] = useState('')

    const [birthdayChecked, setBirthdayChecked] = useState<boolean>(false)
    const [deadChecked, setDeadChecked] = useState<boolean>(false)

    const setBirthdayCheckedHandler = () => {
        setBirthdayChecked(!birthdayChecked)
    }
    const setDeadCheckedHandler = () => {
        setDeadChecked(!deadChecked)
    }
    const dateOfBirthdayHandler = (date: string) => {
        setDateOfBirthday(date)
    }
    const dateOfDeadHandler = (date: string) => {
        setDateOfDead(date)
    }
    const monthOfDeadHandler = (month: string) => {
        setMonthOfDead(month)
    }
    const monthOfBirthdayHandler = (month: string) => {
        setMonthOfBirthday(month)
    }
    const yearOfBirthdayHandler = (date: string) => {
        setYearOfBirthday(date)
    }
    const yearOfDeadHandler = (date: string) => {
        setYearOfDead(date)
    }

    return (
        <>
            <div className={s.block}>
                <Typography variant={'head1'}>
                    Дата рождения
                </Typography>
                <div className={s.blockWrapper}>
                    <SelectSimple options={dateOfBirthdaySelect} placeholder={'Дата'} value={dateOfBirthday}
                                  onChange={dateOfBirthdayHandler}/>
                    <SelectSimple options={monthOfBirthdaySelect} className={`${s.centerSelect}`}
                                  placeholder={'Месяц'}
                                  value={monthOfBirthday}
                                  onChange={monthOfBirthdayHandler}/>
                    <SelectSimple options={yearOfBirthdaySelect} placeholder={'Год'} value={yearOfBirthday}
                                  onChange={yearOfBirthdayHandler}/>
                </div>
                <Checkbox onChecked={setBirthdayCheckedHandler} checked={birthdayChecked} title={'Неизвестно'}/>
            </div>
            <div className={`${s.block} ${s.indent}`}>
                <Typography variant={'head1'}>
                    Дата смерти
                </Typography>
                <div className={s.blockWrapper}>
                    <SelectSimple options={dateOfDeadSelect} placeholder={'Дата'} value={dateOfDead}
                                  onChange={dateOfDeadHandler}/>
                    <SelectSimple options={monthOfDeadSelect} className={`${s.centerSelect}`}
                                  placeholder={'Месяц'}
                                  value={monthOfDead}
                                  onChange={monthOfDeadHandler}/>
                    <SelectSimple options={yearOfDeadSelect} placeholder={'Год'} value={yearOfDead}
                                  onChange={yearOfDeadHandler}/>
                </div>
                <Checkbox onChecked={setDeadCheckedHandler} checked={deadChecked} title={'Неизвестно'}/>
            </div>
            <div className={s.block}>
                <Typography variant={'head1'}>
                    Причина смерти
                </Typography>
                <Input className={s.reason} placeholder={'Введите причину смерти'}/>
            </div>
            <Button className={s.button} onClick={() => onChangeStage(4)} type={'button'}>
                <Typography variant={'head1'}>Далее</Typography>
            </Button>
        </>
    );
};
