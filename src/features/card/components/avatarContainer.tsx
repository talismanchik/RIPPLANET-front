import s from '../Card.module.scss'
import {Icon} from "../../../shared/ui/icon/icon.tsx";

type Props = {
    photo?: string
}
export const AvatarContainer = ({photo}:Props) => {
    return (
        <div>
            <div className={s.profileCardImgWrapper}>
                {
                    photo
                        ? <img className={s.image} alt={'photo'} src={`${import.meta.env.VITE_BASE_URL}${photo}`}/>
                        : <Icon iconId={'avatar'} width={'96px'} height={'96px'}
                                viewBox={'-1.5 0 19 19'}/>
                }
            </div>
        </div>
    );
};

