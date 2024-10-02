import s from './oneOfSome.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {SelectedIcon} from "../../../shared/decorators/selectedIcon/selectedIcon.tsx";
import {OneOfTwoItem} from "../../../widgets/constructor/constructorStore.ts";

type Props = {
    activeItem: string
    onChangeActiveItem: (value: string) => void
    variables: OneOfTwoItem[]
}
export const OneOfSome = ({
                               activeItem,
                               onChangeActiveItem,
                               variables
                           }: Props) => {

    return (
        <div className={s.fasteningsContainer}>
            {variables.map(item => {
                return <div key={item.value}
                            className={`${s.fastening} ${activeItem === item.value ? s.activeFastening : ''}`}
                            onClick={() => onChangeActiveItem(item.value)}>
                    <Typography className={`${s.fasteningTitle}`} as='span'
                                variant={'titleSpecial'}>{item.title}</Typography>
                    {activeItem !== item.value &&
                        <Typography className={`${s.fasteningCoast}`}
                                    as='span'
                                    variant={'titleSpecialBold'}>
                            {item.coast}
                        </Typography>
                    }
                    {activeItem === item.value && <SelectedIcon className={s.selectedItem}/>}
                </div>
            })}
        </div>
    );
};

