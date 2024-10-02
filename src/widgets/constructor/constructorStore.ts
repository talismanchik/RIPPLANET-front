import metal from '../../assets/images/materialsForConstructor/metal.webp'
import plasticDouble from '../../assets/images/materialsForConstructor/plasticDoble.webp'
import whitePlasticModel1 from '../../assets/images/models/witePlastic/witePlasticModel1.png'
import whitePlasticModel2 from '../../assets/images/models/witePlastic/witePlasticModel2.png'
import whitePlasticModel3 from '../../assets/images/models/witePlastic/witePlasticModel3.png'
import whitePlasticModel4 from '../../assets/images/models/witePlastic/witePlasticModel4.png'
import whitePlasticModel5 from '../../assets/images/models/witePlastic/witePlasticModel5.png'
import whitePlasticModel6 from '../../assets/images/models/witePlastic/witePlasticModel6.png'
import whitePlasticModel7 from '../../assets/images/models/witePlastic/witePlasticModel7.png'
import whitePlasticModel8 from '../../assets/images/models/witePlastic/witePlasticModel8.png'
import whitePlasticModel9 from '../../assets/images/models/witePlastic/witePlasticModel9.png'
import whitePlasticModel10 from '../../assets/images/models/witePlastic/witePlasticModel10.png'
import blackPlasticModel1 from '../../assets/images/models/blackPlastic/blackPlasticModel1.png'
import blackPlasticModel2 from '../../assets/images/models/blackPlastic/blackPlasticModel2.png'
import blackPlasticModel3 from '../../assets/images/models/blackPlastic/blackPlasticModel3.png'
import blackPlasticModel4 from '../../assets/images/models/blackPlastic/blackPlasticModel4.png'
import blackPlasticModel5 from '../../assets/images/models/blackPlastic/blackPlasticModel5.png'
import blackPlasticModel6 from '../../assets/images/models/blackPlastic/blackPlasticModel6.png'
import blackPlasticModel7 from '../../assets/images/models/blackPlastic/blackPlasticModel7.png'
import blackPlasticModel8 from '../../assets/images/models/blackPlastic/blackPlasticModel8.png'
import blackPlasticModel9 from '../../assets/images/models/blackPlastic/blackPlasticModel9.png'
import blackPlasticModel0 from '../../assets/images/models/blackPlastic/blackPlasticModel10.png'
import defaultModel1 from '../../assets/images/models/default/defaultModels1.png'
import defaultModel2 from '../../assets/images/models/default/defaultModels2.png'
import defaultModel3 from '../../assets/images/models/default/defaultModels3.png'
import defaultModel4 from '../../assets/images/models/default/defaultModels4.png'
import defaultModel5 from '../../assets/images/models/default/defaultModels5.png'
import defaultModel6 from '../../assets/images/models/default/defaultModels6.png'
import defaultModel7 from '../../assets/images/models/default/defaultModels7.png'
import defaultModel8 from '../../assets/images/models/default/defaultModels8.png'
import defaultModel9 from '../../assets/images/models/default/defaultModels9.png'
import defaultModel10 from '../../assets/images/models/default/defaultModels10.png'
import metalModel1 from '../../assets/images/models/metal/metalModel1.png'
import metalModel2 from '../../assets/images/models/metal/metalModel2.png'
import metalModel3 from '../../assets/images/models/metal/metalModel3.png'
import metalModel4 from '../../assets/images/models/metal/metalModel4.png'
import metalModel5 from '../../assets/images/models/metal/metalModel5.png'
import metalModel6 from '../../assets/images/models/metal/metalModel6.png'
import metalModel7 from '../../assets/images/models/metal/metalModel7.png'
import metalModel8 from '../../assets/images/models/metal/metalModel8.png'
import metalModel9 from '../../assets/images/models/metal/metalModel9.png'
import metalModel10 from '../../assets/images/models/metal/metalModel10.png'

// STORE
export const materials: Material[] = [
    {
        title: 'Металл',
        value: 'metal',
        coast: 'от 4 $',
        blur: false,
        picture: metal
    },
    {
        title: 'Пластик',
        value: 'plastic',
        coast: 'от 2 $',
        blur: false,
        picture: plasticDouble
    },
    {
        title: 'Керамика',
        value: 'ceramics',
        coast: 'от 4 $',
        blur: true,
    }
]

export const fastenings: OneOfTwoItem[] = [
    {value: 'withoutGlue', title: 'Без клея', coast: '0 $'},
    {value: 'withGlue', title: 'Клей', coast: '0,5 $'},
]

export const plasticColors: OneOfTwoItem[] = [
    {value: 'white', title: 'Белый'},
    {value: 'black', title: 'Чёрный'},
]

export const defaultModels: Model[] = [
    {value: 'model1', picture: defaultModel1, title: 'Модель № 1', coast: 'от 2 $'},
    {value: 'model2', picture: defaultModel2, title: 'Модель № 2', coast: 'от 4 $'},
    {value: 'model3', picture: defaultModel3, title: 'Модель № 3', coast: 'от 2 $'},
    {value: 'model4', picture: defaultModel4, title: 'Модель № 4', coast: 'от 4 $'},
    {value: 'model5', picture: defaultModel5, title: 'Модель № 5', coast: 'от 2 $'},
    {value: 'model6', picture: defaultModel6, title: 'Модель № 6', coast: 'от 5 $'},
    {value: 'model7', picture: defaultModel7, title: 'Модель № 7', coast: 'от 2 $'},
    {value: 'model8', picture: defaultModel8, title: 'Модель № 8', coast: 'от 5 $'},
    {value: 'model9', picture: defaultModel9, title: 'Модель № 9', coast: 'от 2 $'},
    {value: 'model10', picture: defaultModel10, title: 'Модель № 10', coast: 'от 2 $'},
]

export const whitePlasticModels: Model[] = [
    {value: 'model1', picture: whitePlasticModel1, title: 'Модель № 1', coast: 'от 2 $'},
    {value: 'model2', picture: whitePlasticModel2, title: 'Модель № 2', coast: 'от 4 $'},
    {value: 'model3', picture: whitePlasticModel3, title: 'Модель № 3', coast: 'от 2 $'},
    {value: 'model4', picture: whitePlasticModel4, title: 'Модель № 4', coast: 'от 4 $'},
    {value: 'model5', picture: whitePlasticModel5, title: 'Модель № 5', coast: 'от 2 $'},
    {value: 'model6', picture: whitePlasticModel6, title: 'Модель № 6', coast: 'от 5 $'},
    {value: 'model7', picture: whitePlasticModel7, title: 'Модель № 7', coast: 'от 2 $'},
    {value: 'model8', picture: whitePlasticModel8, title: 'Модель № 8', coast: 'от 5 $'},
    {value: 'model9', picture: whitePlasticModel9, title: 'Модель № 9', coast: 'от 2 $'},
    {value: 'model10', picture: whitePlasticModel10, title: 'Модель № 10', coast: 'от 2 $'},
]

export const blackPlasticModels: Model[] = [
    {value: 'model1', picture: blackPlasticModel1, title: 'Модель № 1', coast: 'от 2 $'},
    {value: 'model2', picture: blackPlasticModel2, title: 'Модель № 2', coast: 'от 4 $'},
    {value: 'model3', picture: blackPlasticModel3, title: 'Модель № 3', coast: 'от 2 $'},
    {value: 'model4', picture: blackPlasticModel4, title: 'Модель № 4', coast: 'от 4 $'},
    {value: 'model5', picture: blackPlasticModel5, title: 'Модель № 5', coast: 'от 2 $'},
    {value: 'model6', picture: blackPlasticModel6, title: 'Модель № 6', coast: 'от 5 $'},
    {value: 'model7', picture: blackPlasticModel7, title: 'Модель № 7', coast: 'от 2 $'},
    {value: 'model8', picture: blackPlasticModel8, title: 'Модель № 8', coast: 'от 5 $'},
    {value: 'model9', picture: blackPlasticModel9, title: 'Модель № 9', coast: 'от 2 $'},
    {value: 'model10', picture: blackPlasticModel0, title: 'Модель № 10', coast: 'от 2 $'},
]

export const metalModels: Model[] = [
    {value: 'model1', picture: metalModel1, title: 'Модель № 1', coast: 'от 2 $'},
    {value: 'model2', picture: metalModel2, title: 'Модель № 2', coast: 'от 4 $'},
    {value: 'model3', picture: metalModel3, title: 'Модель № 3', coast: 'от 2 $'},
    {value: 'model4', picture: metalModel4, title: 'Модель № 4', coast: 'от 4 $'},
    {value: 'model5', picture: metalModel5, title: 'Модель № 5', coast: 'от 2 $'},
    {value: 'model6', picture: metalModel6, title: 'Модель № 6', coast: 'от 5 $'},
    {value: 'model7', picture: metalModel7, title: 'Модель № 7', coast: 'от 2 $'},
    {value: 'model8', picture: metalModel8, title: 'Модель № 8', coast: 'от 5 $'},
    {value: 'model9', picture: metalModel9, title: 'Модель № 9', coast: 'от 2 $'},
    {value: 'model10', picture: metalModel10, title: 'Модель № 10', coast: 'от 2 $'},
]

// TYPES
export type Material = {
    title: string
    value: string
    coast: string
    blur: boolean
    picture?: string
}
export type OneOfTwoItem = {
    title: string
    value: string
    coast?: string
}
export type Model = {
    picture: string
    title: string
    value: string
    coast: string
}
