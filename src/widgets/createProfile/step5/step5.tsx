import s from './step5.module.scss'
import {Button} from "../../../shared/ui/button/button.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Input} from "../../../shared/ui/input/input.tsx";
import {Checkbox} from "../../../shared/ui/checkbox/checkbox.tsx";
import {useState} from "react";
import {MapContainer} from "../../../features/map/map.tsx";
import {AddPhotoVideo} from "../../../features/addPhotoVideo/addPhotoVideo.tsx";

type Props = {
    onChangeStage: (nextStage: number) => void
}

export const Step5 = ({onChangeStage}: Props) => {
    const [isLocationKnown, setIsLocationKnown] = useState<boolean>(false)
    const setIsLocationKnownHandler = () => {
        setIsLocationKnown(!isLocationKnown)
    }

    return (
        <>
            <Typography variant={'head1'}>
                Место захоронения
            </Typography>
            <div className={s.locationInputs}>
                <Input variant={'searchDecoration'} placeholder={'Страна'}/>
                <Input variant={'searchDecoration'} placeholder={'Область'}/>
                <Input variant={'searchDecoration'} placeholder={'Город'}/>
            </div>
            <Input variant={'searchDecoration'} placeholder={'Координаты'}/>

            <div className={s.mapContainer}>
                <MapContainer/>
            </div>
            <AddPhotoVideo className={s.addMediaBlock}/>
            <div className={s.checkBox}>
                <Checkbox title={'Неизвестно'} checked={isLocationKnown} onChecked={setIsLocationKnownHandler}/>
            </div>
            <Button className={s.buttonNext} onClick={() => onChangeStage(6)}
                    type={'button'}>
                <Typography variant={'head1'}>Далее</Typography>
            </Button>

        </>
    );
};
