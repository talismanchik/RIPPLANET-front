import {Input} from "../../shared/ui/input/input.tsx";
import s from './contactUs.module.scss'
import {Textarea} from "../../shared/ui/textArea/textarea.tsx";
import {Button} from "../../shared/ui/button/button.tsx";
import {Typography} from "../../shared/ui/typography/typography.tsx";

export const ContactUs = () => {
    return (
        <form className={s.formContainer}>
            <Input type={'text'} placeholder={'Фамилия'} label={'Фамилия'}/>
            <Input type={'text'} placeholder={'Имя'} label={'Имя'}/>
            <Input type={"email"} placeholder={'name@example.com'} label={'E-mail'}/>
            <Input type={'tel'} placeholder={'Номер телефона'} label={'Номер телефона'}/>
            <Textarea label={'текст'}/>
            <Button type={'submit'}><Typography variant={'body2'}>Отправить</Typography></Button>
        </form>
    );
};

