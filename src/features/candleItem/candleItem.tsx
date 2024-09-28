import s from './candleItem.module.scss'

type CandleItemType = {
    classname?: string
    id: string
    coast?: string
    picture?: string
    isActive: boolean
    onChangeActive: (titleCandle: string)=>void
}
export const CandleItem = ({classname, coast, id, picture, isActive, onChangeActive}: CandleItemType) => {
    return (
        <div onClick={()=>onChangeActive(id)} className={`${s.candleContainer} ${isActive? s.active: ''} ${classname}`}>
            <img className={s.picture} alt={'candle'} src={picture}/>
            <span className={s.coast}>{coast}</span>
        </div>
    );
};

