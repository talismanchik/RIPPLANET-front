import s from './addPhotoVideo.module.scss'
import {Icon} from "../../shared/ui/icon/icon.tsx";
import {Typography} from "../../shared/ui/typography/typography.tsx";

type Props = {
    className?: string
}
export const AddPhotoVideo = ({className}:Props) => {
    return (
            <div className={`${s.mapMediaContainer} ${className}`}>
                <Icon iconId={'image'}
                      height={'70'}
                      width={'70'}
                      viewBox={'0 0 70 70'}
                      className={s.image}
                />
                <Typography
                    className={s.textImage}
                    variant={'footnote'}>
                    Перетяните фото места захоронения или видео для загрузки
                </Typography>
            </div>
    );
};

