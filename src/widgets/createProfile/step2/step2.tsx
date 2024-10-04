import s from '../step1/step1.module.scss'
import {Button} from "../../../shared/ui/button/button.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Input} from "../../../shared/ui/input/input.tsx";

type Props = {
    onChangeStage: (nextStage: number) => void
}

export const Step2 = ({onChangeStage}: Props) => {
    return (
        <div>
            <Typography variant={'head1'}>
                Персональные данные
            </Typography>
            <div className={s.inputContainer}>
                <Input placeholder={'Фамилия на английском'}/>
                <Input placeholder={'Имя на английском'}/>
                <Input placeholder={'Отчество на английском'}/>
            </div>
            <Button onClick={() => onChangeStage(3)} type={'button'}>
                <Typography variant={'head1'}>Далее</Typography>
            </Button>
        </div>
    );
};

