import s from './step4.module.scss'
import {Button} from "../../../shared/ui/button/button.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";

type Props = {
    onChangeStage: (nextStage: number)=>void
}

export const Step4 = ({onChangeStage}:Props) => {
    return (
        <div className={s.s}>
            Step4
            <Button onClick={()=>onChangeStage(5)} type={'button'}>
                <Typography variant={'head1'}>Далее</Typography>
            </Button>
        </div>
    );
};

