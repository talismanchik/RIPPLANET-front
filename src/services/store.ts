import candle1 from '../assets/images/candles/candle1.webp'
import candle2 from '../assets/images/candles/candle2.webp'
import candle3 from '../assets/images/candles/candle3.webp'
import candle4 from '../assets/images/candles/candle4.webp'
import candle5 from '../assets/images/candles/candle5.webp'
import candle6 from '../assets/images/candles/candle6.webp'
import candle7 from '../assets/images/candles/candle7.webp'
import candle8 from '../assets/images/candles/candle8.webp'
import candle9 from '../assets/images/candles/candle9.webp'
import candle10 from '../assets/images/candles/candle10.webp'
import candle11 from '../assets/images/candles/candle11.webp'
import candle12 from '../assets/images/candles/candle12.webp'
import candle13 from '../assets/images/candles/candle13.webp'
import candle14 from '../assets/images/candles/candle14.webp'
import candle15 from '../assets/images/candles/candle15.webp'
import candle16 from '../assets/images/candles/candle16.webp'
import candle17 from '../assets/images/candles/candle17.webp'
import candle18 from '../assets/images/candles/candle18.webp'
import candle19 from '../assets/images/candles/candle19.webp'
import candle20 from '../assets/images/candles/candle20.webp'
import candle21 from '../assets/images/candles/candle21.webp'
import feelings1 from '../assets/images/feelings/feelings1.webp'
import feelings2 from '../assets/images/feelings/feelings2.webp'
import feelings3 from '../assets/images/feelings/feelings3.webp'
import feelings4 from '../assets/images/feelings/feelings4.webp'
import feelings5 from '../assets/images/feelings/feelings5.webp'
import feelings6 from '../assets/images/feelings/feelings6.webp'
/*export const profilesHub: ProfileType[] = [
    {id: '1', name: 'Пушкин Александр Сергеевич', nameEng: 'Pushkin Alexander Sergeyevich', age: '37', years: '1799 - 1837', country: 'Россия', like: true, isMyCard: true},
    {id: '2', isMyCard: false, name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {id: '3', isMyCard: false, name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {id: '4', isMyCard: false, name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {id: '5', isMyCard: false, name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {id: '6', isMyCard: false, name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {id: '7', isMyCard: false, name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {id: '8', isMyCard: false, name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {id: '9', isMyCard: false, name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {id: '10', isMyCard: false, name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {id: '11', isMyCard: false, name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {id: '12', isMyCard: false, name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {id: '13', isMyCard: false, name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {id: '14', isMyCard: false, name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {id: '15', isMyCard: false, name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {id: '16', isMyCard: false, name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {id: '17', isMyCard: false, name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {id: '18', isMyCard: false, name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {id: '19', isMyCard: false, name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {id: '20', isMyCard: false, name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {id: '21', isMyCard: false, name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {id: '22', isMyCard: false, name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {id: '23', isMyCard: false, name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {id: '24', isMyCard: false, name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},
    {id: '25', isMyCard: false, name: 'Bryant Kobe', nameEng: 'Bryant Kobe', age: '59', years: '1978-2020', country: 'США', like: true, photo: koby},
    {id: '26', isMyCard: false, name: 'Kennedy John Fitzgerald', nameEng: 'Kennedy John Fitzgerald', age: '46', years: '1917 - 1963', country: 'США', like: false, photo: kennedy},
    {id: '27', isMyCard: false, name: 'Ferrari Enzo Anselmo Giuseppe Maria', nameEng: 'Ferrari Enzo Anselmo Giuseppe Maria', age: '90', years: '1898 - 1988', country: 'США', like: false, photo: ferrari},
    {id: '28', isMyCard: false, name: 'Perry Matthew Langford', nameEng: 'Perry Matthew Langford', age: '54', years: '1969 - 2023', country: 'США', like: true, photo: perry},

]*/


export const candles: MemoryType[] = [
    {id:'1', image: candle1 },
    {id:'2', image: candle2 },
    {id:'3', image: candle3},
    {id:'4', image: candle4, coast: '1 €'},
    {id:'5', image: candle5, coast: '1 €'},
    {id:'6', image: candle6, coast: '1 €'},
    {id:'7', image: candle7, coast: '1 €'},
    {id:'8', image: candle8, coast: '1 €'},
    {id:'9', image: candle9, coast: '1 €'},
    {id:'10', image: candle10, coast: '2 €'},
    {id:'11', image: candle11, coast: '2 €'},
    {id:'12', image: candle12, coast: '2 €'},
    {id:'13', image: candle13, coast: '2 €'},
    {id:'14', image: candle14, coast: '2 €'},
    {id:'15', image: candle15, coast: '2 €'},
    {id:'16', image: candle16, coast: '2 €'},
    {id:'17', image: candle17, coast: '3 €'},
    {id:'18', image: candle18, coast: '3 €'},
    {id:'19', image: candle19, coast: '3 €'},
    {id:'21', image: candle21, coast: '3 €'},
    {id:'20', image: candle20, coast: '5 €'},
]
export const feelings: MemoryType[] = [
    {id:'1', image: feelings1 },
    {id:'2', image: feelings2 },
    {id:'3', image: feelings3},
    {id:'4', image: feelings4 },
    {id:'5', image: feelings5 },
    {id:'6', image: feelings6},
]

export type ProfileType = {
    photo?: string
    name: string
    nameEng?: string
    years: string
    age: string
    country: string
    like: boolean
    isMyCard: boolean
    id: string
}

export type MemoryType = {
    image: string
    coast?: string
    id: string
}