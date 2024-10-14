import s from './like.module.scss'
import {Icon} from "../../ui/icon/icon.tsx";
import {MouseEventHandler} from "react";

type LikeType = {
    isLike: boolean
    setIsLike: () => void
}
export const Like = ({setIsLike, isLike}: LikeType) => {
    const setIsLikeHandler: MouseEventHandler<HTMLDivElement> = (e) => {

        e.stopPropagation()
        setIsLike()
    }
    return (
        <div className={s.likeWrapper} onClick={setIsLikeHandler} data-islike={isLike}>
            <Icon iconId={'like'} width={'18'} height={'14px'} viewBox={'0 0 40 40'}/>
        </div>
    );
};

