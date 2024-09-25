import s from './candleItem.module.scss'
import {Icon} from "../../shared/ui/icon/icon.tsx";

type CandleItemType = {
    coast?: string
    picture?: string
}
export const CandleItem = ({coast, picture}: CandleItemType) => {
    return (
        <div className={s.candleContainer}>
            {picture
                ? <img alt={'candle'} src={''}/>
                : <Icon iconId={'candle'} height={'200px'} width={'200px'} viewBox={'-15 0 50 50'}/>
            }
            <span className={s.coast}>{coast}</span>
        </div>
    );
};

