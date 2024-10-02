import s from './materials.module.scss'
import {Material} from "../../../widgets/constructor/constructorStore.ts";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {SelectedIcon} from "../../../shared/decorators/selectedIcon/selectedIcon.tsx";

type Props = {
    materials: Material[]
    activeItem: string
    onChangeActiveItem: (value: string) =>void
}
export const Materials = ({materials, activeItem, onChangeActiveItem}: Props) => {

    return (
        <div className={s.materialsContainer}>
            {materials.map(item => {
                return (
                    <div onClick={ () =>!item.blur && onChangeActiveItem(item.value)} className={`${s.materialWrapper} ${item.value === activeItem? s.activeWrapper : ''}`} key={item.value}
                         data-disabled={item.blur}>
                        {!item.blur && <img className={s.image} alt={'материал'} src={item.picture}/>}
                        <div className={`${s.info} ${activeItem === item.value? s.activeInfo : ''}`}>
                            <Typography as='span' variant={'titleSpecial'}
                                        className={`${s.materialTitle} ${item.blur ? s.titleBlur : ''}`}>
                                {item.title}
                            </Typography>
                            {!item.blur && <Typography className={s.coast} as='span'
                                                       variant={'titleSpecialBold'}>{item.coast}</Typography>}
                        </div>
                        {item.value === activeItem && !item.blur && <SelectedIcon className={s.selectedItem}/>}

                    </div>)
            })}
        </div>
    );
};

