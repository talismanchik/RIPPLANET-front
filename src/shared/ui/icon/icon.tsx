import sprite from '../../../assets/icons/sprite.svg'

type Props = {
    className?: string
    height?: string
    iconId:
        | 'filters'
        | 'search'
        | 'avatar'
        | 'home'
        | 'candle'
        | 'feelings'
        | 'burger'
        | 'like'
        | 'plus'
        | 'plaques'
        | 'contactUs'
        | 'arrow_back'
        | 'eye_outline'
        | 'eye_off_outline'
        | 'close'
        | 'messenger'
        | 'arrow_down'
        | 'correcter'
        | 'arrow_forward'
        | 'payment'
        | 'history'
        | 'notification'
        | 'language'
        | 'info'
        | 'blackList'
        | 'logout'
        | 'photo'
        | 'map'
        | 'card'
        | 'checkboxTrue'
        | 'checkboxFalse'
        | 'image'
        | 'more'
        | 'camera'
        | 'phone'
        | 'clip'
        | 'microphone'
        | 'sendMessage'
        | 'answer'
        | 'complain'
        | 'delete'
        | 'tree'
        | 'settings'
        | 'portrait'
        | 'share_arrow'
        | 'public_relation'
        | 'list'
        | 'location'
        | 'download'
        | 'full_screen'
        | 'expand'

    viewBox?: string
    width?: string
}

export const Icon = ({className, height, iconId, viewBox, width}: Props) => {
    return (
        <svg
            className={className}
            height={height || '35'}
            viewBox={viewBox || '0 0 35 35'}
            width={width || '35'}
        >
            <use xlinkHref={`${sprite}#${iconId}`}/>
        </svg>
    )
}
