import s from './step6.module.scss'
import {Button} from "../../../shared/ui/button/button.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Checkbox} from "../../../shared/ui/checkbox/checkbox.tsx";
import {useState} from "react";
import {Icon} from "../../../shared/ui/icon/icon.tsx";
import {Carousel} from "../../../features/carousel/carousel.tsx";

type Props = {
    onChangeStage: (nextStage: number) => void
}

export const Step6 = ({onChangeStage}: Props) => {
    const [isContactPerson, setIsContactPerson] = useState<boolean>(false)
    const [filesType, setFilesType] = useState('all')
    const setFilesTypeHandler = (value: string) => {
        setFilesType(value)
    }
    const setIsContactPersonHandler = () => {
        setIsContactPerson(!isContactPerson)
    }
    return (
        <>
            <Typography variant={'head1'}>Фото</Typography>
            <div className={s.content}>
                <Carousel/>
                <div className={s.profileMediaContainer}>
                    <div className={s.mediaContainerHeader}>
                        <div className={s.buttonAddFile}>
                            <span className={s.plus}></span>
                        </div>
                        <div onClick={() => setFilesTypeHandler('all')}
                             className={`${s.mediaTab}  ${filesType === 'all' ? s.activeMediaTab : ''}`}>
                            <Typography>
                                Все
                                <span className={`${s.value}`}>
                                     0
                                </span>
                            </Typography>
                        </div>
                        <div onClick={() => setFilesTypeHandler('photo')}
                             className={`${s.mediaTab}  ${filesType === 'photo' ? s.activeMediaTab : ''}`}>
                            <Typography>
                                Фото
                                <span className={s.value}>
                                     0
                                </span>
                            </Typography>
                        </div>
                        <div onClick={() => setFilesTypeHandler('video')}
                             className={`${s.mediaTab}  ${filesType === 'video' ? s.activeMediaTab : ''}`}>
                            <Typography>
                                Видео
                                <span className={s.value}>
                                     0
                                </span>
                            </Typography>
                        </div>
                    </div>
                    <div className={s.mediaContainerContent}>
                        <Icon iconId={'image'}
                              height={'100'}
                              width={'100'}
                              viewBox={'0 0 70 70'}
                              className={s.image}
                        />
                        <Typography
                            className={s.textImage}
                            variant={'footnote'}>
                            Нажмите здесь или перетяните фото и видео для загрузки </Typography>
                    </div>
                </div>
                <Checkbox title={'Я контактное лицо этого профиля'} checked={isContactPerson}
                          onChecked={setIsContactPersonHandler}/>
            </div>
            <Button onClick={() => onChangeStage(6)} type={'button'}>
                <Typography variant={'head1'}>Создать</Typography>
            </Button>
        </>
    );
};
