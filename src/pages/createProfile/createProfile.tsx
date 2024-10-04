import s from './createProfile.module.scss'
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {Stepper} from "../../widgets/createProfile/stepper/stepper.tsx";
import {useState} from "react";
import {Step1} from "../../widgets/createProfile/step1/step1.tsx";
import {Step2} from "../../widgets/createProfile/step2/step2.tsx";
import {Step3} from "../../widgets/createProfile/step3/step3.tsx";
import {Step4} from "../../widgets/createProfile/step4/step4.tsx";
import {Step5} from "../../widgets/createProfile/step5/step5.tsx";
import {Step6} from "../../widgets/createProfile/step6/step6.tsx";

export const CreateProfile = () => {
    const [stageNumber, setStageNumber] = useState<number>(1)
    const setStageNumberHandler = (newStageNumber: number) => {
        setStageNumber(newStageNumber)
    }
    return (
        <div className={s.createProfileContainer}>
            <div className={`${s.leftBlock}`}>
                <div className={s.linkToBack}>
                    <div className={s.arrowBack}></div>
                    <Typography variant={'body2'}>
                        Вернуться
                    </Typography>
                </div>
                <Typography className={s.title} as='span' variant={'largeTitle1'}>Создание профиля</Typography>
                <Stepper stageNumber={stageNumber} onChangeStage={setStageNumberHandler}/>
            </div>
            <div className={`${s.rightBlock}`}>
                <form className={s.form}>
                    {stageNumber === 1 && <Step1 onChangeStage={setStageNumberHandler}/>}
                    {stageNumber === 2 && <Step2 onChangeStage={setStageNumberHandler}/>}
                    {stageNumber === 3 && <Step3 onChangeStage={setStageNumberHandler}/>}
                    {stageNumber === 4 && <Step4 onChangeStage={setStageNumberHandler}/>}
                    {stageNumber === 5 && <Step5 onChangeStage={setStageNumberHandler}/>}
                    {stageNumber === 6 && <Step6 onChangeStage={setStageNumberHandler}/>}
                </form>
            </div>
        </div>
    );
};

