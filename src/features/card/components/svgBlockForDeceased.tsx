import s from '../Card.module.scss'
import {Like} from "../../../shared/decorators/like/like.tsx";

type Props = {
    isLike: boolean
    setIsLike: () => void
}
export const SvgBlockForDeceased = ({isLike, setIsLike}: Props) => {
    return (
        <div className={s.svgWrapper}>
            <Like isLike={isLike} setIsLike={setIsLike}/>
            {/*{isMyCard &&
                        <Icon className={s.correcter} iconId={'correcter'} width={'26'} height={'26'}
                              viewBox={'11 11 30 30'}/>
                    }*/}
        </div>
    );
};

