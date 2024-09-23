export const profilesHub: ProfileType[] = [
    {name: 'User Name', nameEng: 'UserName', age: '1', years: '2000-2035', country: 'USA', like: true},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USAdsfsdafdsgsafghafhaagasfh', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: true},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: true},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: true},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: true},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: false},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: true},
    {name: 'User Name', nameEng: 'UserName', age: '35', years: '2000-2035', country: 'USA', like: true},
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
}

export type CandleType = {
    picture?: string
    coast?: string
}