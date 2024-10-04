import s from './step6.module.scss'
import {Button} from "../../../shared/ui/button/button.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";

type Props = {
    onChangeStage: (nextStage: number) => void
}

export const Step6 = ({onChangeStage}: Props) => {
    return (
        <div className={s.s}>
            Step6
            <Button onClick={() => onChangeStage(6)} type={'button'}>
                <Typography variant={'head1'}>Создать</Typography>
            </Button>
        </div>
    );
};
