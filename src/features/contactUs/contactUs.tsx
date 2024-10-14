import {Input} from "../../shared/ui/input/input.tsx";
import s from './contactUs.module.scss'
import {Textarea} from "../../shared/ui/textArea/textarea.tsx";
import {Button} from "../../shared/ui/button/button.tsx";
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {contactUsApi} from "./api/contactUs-api.ts";

type Props = {
    onSend: ()=>void
}
export const ContactUs = ({onSend}:Props) => {
    const [formData, setFormData] = useState<formType>({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await contactUsApi.postContactUs(formData);
            setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' });
        } catch (err) {
            console.log(err)
        }
        onSend()
    };

    return (
        <form className={s.formContainer} onSubmit={handleSubmit}>
            <Input type={'text'} name={'last_name'} value={formData.last_name} onChange={handleChange} placeholder={'Фамилия'} label={'Фамилия'}/>
            <Input type={'text'} name={'first_name'} value={formData.first_name} onChange={handleChange}  placeholder={'Имя'} label={'Имя'}/>
            <Input type={"email"} name={'email'} value={formData.email} onChange={handleChange}  placeholder={'name@example.com'} label={'E-mail'}/>
            <Input type={'tel'} name={'phone'} value={formData.phone} onChange={handleChange}  placeholder={'Номер телефона'} label={'Номер телефона'}/>
            <Textarea label={'текст'} name={'message'}  value={formData.message} onChange={handleChange} />
            <Button  type={'submit'}>
                <Typography as='span' variant={'body1'}>
                    Отправить
                </Typography>
            </Button>
        </form>
    );
};
//
type formType = {
    first_name: string
    last_name: string
    email: string
    phone: string
    message: string
}

