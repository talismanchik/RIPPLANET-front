import koby from '../assets/images/accaunts/koby.jpg'
import kennedy from '../assets/images/accaunts/kennedy.jpg'
import ferrari from '../assets/images/accaunts/ferrary.jpg'
import perry from '../assets/images/accaunts/perry.jpg'

export const profilesHub: ProfileType[] = [
    {name: 'Пушкин Александр Сергеевич', nameEng: 'Pushkin Alexander Sergeyevich', age: '37', years: '1799 - 1837', country: 'Россия', like: true, isMyCard: true},
    {name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},

]


export const candles: CandleType[] = [
    { },
    { },
    { coast: '1 €'},
    { coast: '1 €'},
    { coast: '2 €'},
    { coast: '2 €'},
    { coast: '3 €'},
    { coast: '3 €'},
    { coast: '4 €'},
    { coast: '4 €'},
    { coast: '5 €'},
    { coast: '6 €'},
    { coast: '6 €'},
    { coast: '6 €'},
    { coast: '6 €'},
    { coast: '6 €'},
]

export type ProfileType = {
    photo?: string
    name: string
    nameEng?: string
    years: string
    age: string
    country: string
    like: boolean
    isMyCard?: boolean
}

export type CandleType = {
    picture?: string
    coast?: string
}