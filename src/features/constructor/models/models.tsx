import s from './models.module.scss'
import {Model} from "../../../widgets/constructor/constructorStore.ts";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {SelectedIcon} from "../../../shared/decorators/selectedIcon/selectedIcon.tsx";

type Props = {
    models: Model[]
    activeItem: string
    onChangeActiveItem: (value: string) =>void
}
export const Models = ({models, onChangeActiveItem, activeItem}: Props) => {
    return (
        <div className={s.modelsContainer}>
            {models.map((model, index) => {
                return (
                    <div onClick={()=>onChangeActiveItem(model.value)} className={`${s.modelContainer} ${activeItem === model.value? s.activeModel : ''}`} key={index}>
                        <div className={s.imgWrapper}>
                            <img className={s.img} alt={'model'} src={model.picture}/>
                        </div>
                        <div className={s.info}>
                            <Typography className={`${s.modelTitle}`}
                                        variant={'titleSpecial'}>{model.title}</Typography>
                            <Typography className={s.coast} variant={'titleSpecialBold'}>{model.coast}</Typography>
                        </div>
                        {activeItem === model.value && <SelectedIcon className={s.selectedItem}/>}
                    </div>
                )
            })}
        </div>
    );
};

