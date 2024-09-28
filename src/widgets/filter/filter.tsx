import s from './filter.module.scss'
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {Input} from "../../shared/ui/input/input.tsx";
import {TabItem, TabSwitcher} from "../../shared/ui/tabSwitcher/tabSwitcher.tsx";
import {useState} from "react";
import {SelectSimple} from "../../shared/ui/select/selectSimple.tsx";
import {RadioGroup} from "../../shared/ui/radioGroup/radioGroup.tsx";

type FilterType = {
    isOpen: boolean
    setIsOpen: () => void
}
export const Filter = ({ setIsOpen}: FilterType) => {
    const [tab, setTab] = useState('alive')
    const [dateOfBirthday, setDateOfBirthday] = useState('')
    const [dateOfDead, setDateOfDead] = useState('')
    const [monthOfBirthday, setMonthOfBirthday] = useState('')
    const [monthOfDead, setMonthOfDead] = useState('')
    const [yearOfBirthday, setYearOfBirthday] = useState('')
    const [yearOfDead, setYearOfDead] = useState('')
    const [gender, setGender] = useState('')

    const onChangeTabSwitcher = (value: string) => {
        setTab(value)
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

    const onChangeGenderHandler = (value: string) => {
        setGender(value);
    }

    return (
        <>
            <div className={s.blurMode}></div>
            <div className={s.filterContainer}>
                <div className={s.filterHeader}>
                    <Typography variant={'largeTitle1'}>Фильтр</Typography>
                    <button type={'button'} className={s.cross} onClick={setIsOpen}></button>
                </div>
                <form className={s.formContainer}>
                    <TabSwitcher items={tabData} onValueChange={onChangeTabSwitcher} value={tab}/>
                    <div className={`${s.filterBlock}`}>
                        <Typography variant={'body1'}>Дата рождения</Typography>
                        <div className={s.blockWrapper}>
                            <SelectSimple options={dateOfBirthdaySelect} placeholder={'Дата'} value={dateOfBirthday}
                                          onChange={dateOfBirthdayHandler}/>
                            <SelectSimple options={monthOfBirthdaySelect} className={`${s.centerSelect}`}
                                          placeholder={'Месяц'}
                                          value={monthOfBirthday}
                                          onChange={monthOfBirthdayHandler}/>
                            <SelectSimple options={yearOfBirthdaySelect} placeholder={'Год'} value={yearOfBirthday}
                                          onChange={yearOfBirthdayHandler}/></div>
                    </div>
                    <div className={`${s.filterBlock}`}>
                        <Typography variant={'body1'}>Дата смерти</Typography>
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
                    </div>
                    <div className={`${s.filterBlock}`}>
                        <Typography variant={'body1'}>Возраст</Typography>
                        <div className={s.blockWrapper}>
                            <div className={s.ageRange}>
                                <Typography className={s.ageRangeSpan} variant={'subhead'}>от</Typography>
                                <Input className={`${s.input}`} type="number"/>
                            </div>
                            <div className={s.ageRange}>
                                <Typography className={s.ageRangeSpan} variant={'subhead'}>до</Typography>
                                <Input className={s.input} type="number"/>
                            </div>
                        </div>
                    </div>
                    <div className={`${s.filterBlock}`}>
                        <Typography variant={'body1'}>Пол</Typography>
                        <div className={s.blockWrapper}>
                            <RadioGroup options={radioData} value={gender} onchangeValue={onChangeGenderHandler}/>
                        </div>
                    </div>
                    <div className={`${s.filterBlock}`}>
                        <Typography variant={'body1'}>Дополнительно</Typography>
                        <ul className={s.additionally}>
                            <li className={s.additionallyBlock}>
                                <Typography variant={'body2'}>Религия</Typography>
                                <div className={s.choiceButton}>
                                    <Typography variant={'subhead'}>Выбрать</Typography>
                                    <div className={s.arrowNext}></div>
                                </div>
                            </li>
                            <li className={s.additionallyBlock}>
                                <Typography variant={'body2'}>Страна</Typography>
                                <div className={s.choiceButton}>
                                    <Typography variant={'subhead'}>Выбрать</Typography>
                                    <div className={s.arrowNext}></div>
                                </div>
                            </li>
                            <li className={s.additionallyBlock}>
                                <Typography variant={'body2'}>Город</Typography>
                                <div className={s.choiceButton}>
                                    <Typography variant={'subhead'}>Выбрать</Typography>
                                    <div className={s.arrowNext}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={s.buttonsWrapper}>
                        <button type={'reset'} className={`${s.button} ${s.reset}`}><Typography variant={'body2'}>Сбросить</Typography></button>
                        <button className={`${s.button} ${s.search}`}><Typography variant={'body2'}>Поиск</Typography></button>
                    </div>
                </form>
            </div>
        </>
    );
};

// data

export const tabData: TabItem[] = [
    {title: 'Живые', value: 'alive'},
    {title: 'Умершие', value: 'dead'}
]

const radioData: TabItem[] = [
    {title: 'Мужской', value: 'male'},
    {title: 'Женский', value: 'female'}
]
export type OptionsType = {
    title: string,
    value: string
}
export let dateOfBirthdaySelect: OptionsType[] = []
export let dateOfDeadSelect: OptionsType[] = []

for (let i = 1; i < 32; i++) {
    dateOfBirthdaySelect.push({title: i + '', value: i + ''})
    dateOfDeadSelect.push({title: i + '', value: i + ''})
}

export let monthOfBirthdaySelect: OptionsType[] = [
    {value: 'January', title: 'Январь'},
    {value: 'February', title: 'Февраль'},
    {value: 'March', title: 'Март'},
    {value: 'April', title: 'Апрель'},
    {value: 'May', title: 'Май'},
    {value: 'June', title: 'Июнь'},
    {value: 'July', title: 'Июль'},
    {value: 'August', title: 'Август'},
    {value: 'September', title: 'Сентябрь'},
    {value: 'October', title: 'Октябрь'},
    {value: 'November', title: 'Ноябрь'},
    {value: 'December', title: 'Декабрь'},
]

export let monthOfDeadSelect: OptionsType[] = [
    {value: 'January', title: 'Январь'},
    {value: 'February', title: 'Февраль'},
    {value: 'March', title: 'Март'},
    {value: 'April', title: 'Апрель'},
    {value: 'May', title: 'Май'},
    {value: 'June', title: 'Июнь'},
    {value: 'July', title: 'Июль'},
    {value: 'August', title: 'Август'},
    {value: 'September', title: 'Сентябрь'},
    {value: 'October', title: 'Октябрь'},
    {value: 'November', title: 'Ноябрь'},
    {value: 'December', title: 'Декабрь'},
]


export let yearOfBirthdaySelect: OptionsType[] = []
export let yearOfDeadSelect: OptionsType[] = []

for (let i = 2024; i > 0; i--) {
    yearOfBirthdaySelect.push({title: i + '', value: i + ''})
    yearOfDeadSelect.push({title: i + '', value: i + ''})
}

