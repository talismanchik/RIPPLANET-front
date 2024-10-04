import s from './stepper.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";

type Props = {
    stageNumber: number
    onChangeStage: (newStage: number) => void
className?: string
}

export const Stepper = ({className, stageNumber, onChangeStage}: Props) => {
    return (
        <div className={`${s.stepperContainer} ${className}`}>
            <div className={`${s.stepItemContainer}
             ${stageNumber === 1 ? s.activeItem : ''} 
             ${stageNumber > 1 ? s.fillLine : ''}`}>
                <span onClick={() => onChangeStage(1)} className={s.radio}>
                    {stageNumber >= 1 && <span className={s.activeRadio}></span>}
                </span>
                {stageNumber === 1 && <div className={s.itemContent}>
                    <div className={s.stageWrapper}>
                        <Typography variant={'largeTitle1'}>
                            1
                        </Typography>
                        <Typography className={s.head1} variant={'head1'}>
                            / 6
                        </Typography>
                    </div>
                    <Typography className={s.contentText} variant={'body2'}>
                        Заполните имя, фамилию и отчество, если таковое имеется. Выберите пол.
                    </Typography>
                </div>}
            </div>
            <div className={`${s.stepItemContainer}
             ${stageNumber === 2 ? s.activeItem : ''} 
             ${stageNumber > 2 ? s.fillLine : ''}`}>
                <span onClick={() => onChangeStage(2)} className={s.radio}>
                    {stageNumber >= 2 && <span className={s.activeRadio}></span>}
                </span>
                {stageNumber === 2 && <div className={s.itemContent}>
                    <div className={s.stageWrapper}>
                        <Typography variant={'largeTitle1'}>
                            2
                        </Typography>
                        <Typography className={s.head1} variant={'head1'}>
                            / 6
                        </Typography>
                    </div>
                    <Typography className={s.contentText} variant={'body2'}>
                        Рекомендуем заполнить имя, фамилию и отчество, если таковое имеется, на английском
                        языке.
                    </Typography>
                </div>}
            </div>
            <div className={`${s.stepItemContainer}
             ${stageNumber === 3 ? s.activeItem : ''} 
             ${stageNumber > 3 ? s.fillLine : ''}`}>
                <span onClick={() => onChangeStage(3)} className={s.radio}>
                    {stageNumber >= 3 && <span className={s.activeRadio}></span>}
                </span>
                {stageNumber === 3 && <div className={s.itemContent}>
                    <div className={s.stageWrapper}>
                        <Typography variant={'largeTitle1'}>
                            3
                        </Typography>
                        <Typography className={s.head1} variant={'head1'}>
                            / 6
                        </Typography>
                    </div>
                    <Typography className={s.contentText} variant={'body2'}>
                        Выберите дату рождения и дату смерти. Введите причину смерти.
                    </Typography>
                </div>}
            </div>
            <div className={`${s.stepItemContainer}
             ${stageNumber === 4 ? s.activeItem : ''} 
             ${stageNumber > 4 ? s.fillLine : ''}`}>
                <span onClick={() => onChangeStage(4)} className={s.radio}>
                    {stageNumber >= 4 && <span className={s.activeRadio}></span>}
                </span>
                {stageNumber === 4 && <div className={s.itemContent}>
                    <div className={s.stageWrapper}>
                        <Typography variant={'largeTitle1'}>
                            4
                        </Typography>
                        <Typography className={s.head1} variant={'head1'}>
                            / 6
                        </Typography>
                    </div>
                    <Typography className={s.contentText} variant={'body2'}>
                        Выберите религию. </Typography>
                </div>}
            </div>
            <div className={`${s.stepItemContainer}
             ${stageNumber === 5 ? s.activeItem : ''} 
             ${stageNumber > 5 ? s.fillLine : ''}`}>
                <span onClick={() => onChangeStage(5)} className={s.radio}>
{stageNumber >= 5 && <span className={s.activeRadio}></span>}

                </span>
                {stageNumber === 5 && <div className={s.itemContent}>
                    <div className={s.stageWrapper}>
                        <Typography variant={'largeTitle1'}>
                            5
                        </Typography>
                        <Typography className={s.head1} variant={'head1'}>
                            / 6
                        </Typography>
                    </div>
                    <Typography className={s.contentText} variant={'body2'}>
                        Отметьте место захоронения на карте или заполните поля вручную. </Typography>
                </div>}
            </div>
            <div className={`${s.stepItemContainer}
             ${stageNumber === 6 ? s.activeItem : ''} 
             ${stageNumber > 6 ? s.fillLine : ''}`}>
                <span onClick={() => onChangeStage(6)}
                      className={s.radio}>
                    {stageNumber >= 6 && <span className={s.activeRadio}></span>}
                </span>
                {stageNumber === 6 && <div className={s.itemContent}>
                    <div className={s.stageWrapper}>
                        <Typography variant={'largeTitle1'}>
                            6
                        </Typography>
                        <Typography className={s.head1} variant={'head1'}>
                            / 6
                        </Typography>
                    </div>
                    <Typography className={s.contentText} variant={'body2'}>
                        Загрузите главное фото, а так же фото и видео в галерею профиля. Выберите рамку для главного
                        фото.
                    </Typography>
                </div>}
            </div>
        </div>
    );
};

