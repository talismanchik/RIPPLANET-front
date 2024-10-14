import {Input} from "../../shared/ui/input/input.tsx";
import s from './contactUs.module.scss'
import {Textarea} from "../../shared/ui/textArea/textarea.tsx";
import {Button} from "../../shared/ui/button/button.tsx";
import {Typography} from "../../shared/ui/typography/typography.tsx";
 import {useAppDispatch} from "../../app/store.ts";
import {ContactUsType} from "./api/contactUsType.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {sendContactUsFormTC} from "./model/contactUsSlice.ts";

type Props = {
    onSend: () => void
}
export const ContactUs = ({onSend}: Props) => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit} = useForm<ContactUsType>()

    const onSubmit: SubmitHandler<ContactUsType> = data => {
        try {
            dispatch(sendContactUsFormTC({...data}))
            onSend()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <Input type={'text'} {...register('last_name')} placeholder={'Фамилия'} label={'Фамилия'}/>
            <Input {...register('first_name')} type={'text'} placeholder={'Имя'} label={'Имя'}/>
            <Input type={"email"} placeholder={'name@example.com'} label={'E-mail'} {...register('email')}/>
            <Input type={'tel'}  {...register('phone')} placeholder={'Номер телефона'} label={'Номер телефона'}/>
            <Textarea label={'текст'}  {...register('message')} />
            <Button type={'submit'}>
                <Typography as='span' variant={'body1'}>
                    Отправить
                </Typography>
            </Button>
        </form>
    );
};



