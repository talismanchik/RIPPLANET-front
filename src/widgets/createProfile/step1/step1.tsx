import s from './step1.module.scss'
import {Button} from "../../../shared/ui/button/button.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Input} from "../../../shared/ui/input/input.tsx";
import {RadioGroup} from "../../../shared/ui/radioGroup/radioGroup.tsx";
import {useState} from "react";
import {TabItem} from "../../../shared/ui/tabSwitcher/tabSwitcher.tsx";

type Props = {
    onChangeStage: (nextStage: number) => void
}

export const Step1 = ({onChangeStage}: Props) => {

    const [gender, setGender] = useState('male')
    const onChangeGenderHandler = (value: string) => {
        setGender(value);
    }
    return (
        <>
            <Typography variant={'head1'}>
                Персональные данные
            </Typography>
            <div className={s.inputContainer}>
                <Input placeholder={'Фамилия*'}/>
                <Input placeholder={'Имя*'}/>
                <Input placeholder={'Отчество'}/>
            </div>
            <Typography variant={'head1'}>Пол</Typography>
            <RadioGroup className={s.radio} options={radioData} value={gender} onchangeValue={onChangeGenderHandler}/>
            <Button className={s.button} onClick={() => onChangeStage(2)} type={'button'}>
                <Typography variant={'head1'}>Далее</Typography>
            </Button>
        </>
    );
};
//data
const radioData: TabItem[] = [
    {title: 'Мужской', value: 'male'},
    {title: 'Женский', value: 'female'}
]
