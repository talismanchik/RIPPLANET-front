import s from './constructor.module.scss'
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {Button} from "../../shared/ui/button/button.tsx";
import {useState} from "react";
import {ConstructorBlock} from "../../features/constructor/constructorBlock/constructorBlock.tsx";
import {Materials} from "../../features/constructor/materials/materials.tsx";
import {Separator} from "../../shared/decorators/separator/separator.tsx";
import {OneOfSome} from "../../features/constructor/oneOfSome/oneOfSome.tsx";
import {Models} from "../../features/constructor/models/models.tsx";
import {
    blackPlasticModels,
    defaultModels,
    fastenings,
    materials,
    metalModels,
    plasticColors,
    whitePlasticModels
} from "./constructorStore.ts";

export const Constructor = () => {
    const [numberOfMedallions, setNumberOfMedallions] = useState<number>(1)
    const [activeMaterial, setActiveMaterial] = useState('')
    const [activeFastening, setActiveFastening] = useState('')
    const [activeColor, setActiveColor] = useState('')
    const [activeModel, setActiveModel] = useState('')
    const onChangeActiveModel = (newValue:string) => {
        setActiveModel(newValue)
    }
    const onChangeActiveFastening = (newValue:string) => {
        setActiveFastening(newValue)
    }
    const onChangeActiveColor = (newValue:string) => {
        setActiveColor(newValue)
    }
    const onChangeActiveMaterial = (newValue:string) => {
        setActiveMaterial(newValue)
    }

    const onPlusMedallion = () => {
        setNumberOfMedallions(numberOfMedallions + 1)
    }
    const onMinusMedallion = () => {
        setNumberOfMedallions(numberOfMedallions - 1)
    }
    let models = defaultModels
switch (activeMaterial){
    case 'metal':
        models = metalModels
        break
    case 'plastic':
       if (activeColor == 'white'){
           models = whitePlasticModels
       }else {
           models = blackPlasticModels
       }
}

    return (
        <div className={s.constructorWrapper}>
            <header className={s.constructorHeader}>
                <Typography className={s.title} variant={'largeTitle1'}>
                    Создайте свой медальон
                </Typography>
            </header>
            <div className={s.constructorContent}>
                <ConstructorBlock title={'Материал'}>
                    <Materials activeItem={activeMaterial} onChangeActiveItem={onChangeActiveMaterial} materials={materials}/>
                </ConstructorBlock>
                <Separator className={s.separator}/>
                {activeMaterial === 'plastic' &&
                    <>
                        <ConstructorBlock title={'Цвет'}>
                            <OneOfSome onChangeActiveItem={onChangeActiveColor} activeItem={activeColor}
                                       variables={plasticColors}/>
                        </ConstructorBlock>
                        <Separator className={s.separator}/>
                    </>
                }
                <ConstructorBlock title={'Крепление'}>
                    <OneOfSome onChangeActiveItem={onChangeActiveFastening} activeItem={activeFastening}
                               variables={fastenings}/>
                </ConstructorBlock>
                <Separator className={s.separator}/>
                <ConstructorBlock title={'Модель'}>
                    <Models models={models} activeItem={activeModel} onChangeActiveItem={onChangeActiveModel}/>
                </ConstructorBlock>
            </div>

            <div className={s.constructorFooter}>
                <div className={s.countContainer}>
                    <span className={s.footerTitle}>Количество медальонов:</span>
                    <span className={s.counter}>{numberOfMedallions}</span>
                    <div className={s.signWrapper}>
                        <button onClick={onPlusMedallion}
                                disabled={numberOfMedallions >= 20}
                                className={s.sign}>+
                        </button>
                        <span className={s.decorator}></span>
                        <button onClick={onMinusMedallion}
                                disabled={numberOfMedallions <= 1}
                                className={`${s.sign} ${s.minus}`}>-
                        </button>
                    </div>
                </div>
                <Button className={s.footerButton}>
                    <Typography as='span' variant={'body1'}>
                        Заказать
                    </Typography>
                </Button>
            </div>
        </div>
    );
};

