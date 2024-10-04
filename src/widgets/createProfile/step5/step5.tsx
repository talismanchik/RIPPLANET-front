import s from './step5.module.scss'
import {Button} from "../../../shared/ui/button/button.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";

type Props = {
    onChangeStage: (nextStage: number)=>void
}

export const Step5 = ({onChangeStage}:Props) => {
    return (
        <div className={s.s}>
            Step5
            <Button onClick={()=>onChangeStage(6)} type={'button'}>
                <Typography variant={'head1'}>Далее</Typography>
            </Button>
        </div>
    );
};
