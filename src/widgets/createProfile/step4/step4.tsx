import s from './step4.module.scss'
import {Button} from "../../../shared/ui/button/button.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {useState} from "react";

type Props = {
    onChangeStage: (nextStage: number) => void
}

export const Step4 = ({onChangeStage}: Props) => {
    const [activeReligion, setActiveReligion] = useState('')
    const setActiveReligionHandler = (newReligion: string) => {
        setActiveReligion(newReligion)
    }
    return (
        <>
            <Typography variant={'head1'}>
                Вероисповедание
            </Typography>
            <div className={s.religionListWrapper}>
                <ul className={s.religionList}>
                    {religionList.map(religion => {
                        return (
                            <li className={`${s.religion} ${activeReligion === religion.value ? s.active : ''}`}
                                key={religion.value}
                                onClick={() => setActiveReligionHandler(religion.value)}
                            >
                                <Typography variant={'body1'}>
                                    {religion.title}
                                </Typography>
                                {activeReligion === religion.value && <div className={s.ok}></div>}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <button onClick={() => onChangeStage(5)} className={s.skipButton} type={"button"}>
                <Typography variant={"body2"}>
                    Пропустить
                </Typography>
            </button>
            <Button onClick={() => onChangeStage(5)} type={'button'}>
                <Typography variant={'head1'}>Далее</Typography>
            </Button>
        </>
    );
};

//DATA

const religionList: ReligionType[] = [
    {title: 'Агностицизм', value: 'agnosticism'},
    {title: 'Англиканство', value: 'anglicanism'},
    {title: 'Анимизм', value: 'Animism'},
    {title: 'Армия спасения', value: 'Salvation Army'},
    {title: 'Ассамблеи Бога', value: 'Assemblies of God'},
    {title: 'Атеизм', value: 'Atheism'},
    {title: 'Африканские традиционные религии', value: 'African Traditional Religions'},
    {title: 'Баптизм', value: 'Baptist'},
    {title: 'Бахаи', value: 'Bahai'},
    {title: 'Бон', value: 'Bon'},
    {title: 'Ваджраяна', value: 'Vajrayana'},
    {title: 'Веды', value: 'Vedas'},
    {title: 'Викка', value: 'Wicca'},
    {title: 'Вуду', value: 'Voodoo'},
    {title: 'Гностицизм', value: 'Gnosticism'},
    {title: 'Даосизм', value: 'Taoism'},
]

type ReligionType = {
    title: string
    value: string
}