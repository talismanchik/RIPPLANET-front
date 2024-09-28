import s from './like.module.scss'
import {Icon} from "../../ui/icon/icon.tsx";

type LikeType = {
    isLike: boolean
    setIsLike: (isLike: boolean) => void
}
export const Like = ({setIsLike, isLike}: LikeType) => {
    const setIsLikeHandler = () => {
        setIsLike(!isLike)
    }
    return (
        <div className={s.likeWrapper} onClick={setIsLikeHandler} data-islike={isLike}>
            <Icon iconId={'like'} width={'18'} height={'14px'} viewBox={'0 0 40 40'}/>
        </div>
    );
};

