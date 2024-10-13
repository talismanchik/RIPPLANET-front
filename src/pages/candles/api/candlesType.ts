export type FeelingsType = {
    id: number
    image: string
    title: string
    created_at?: string
    updated_at?: string
}

export type CandlesType = {
    id: number
    image: string
    title: string
    prices: PriceType[]
}
 type PriceType = {
    id: number
    title: string
    price: string
    col_day: 1,
    created_at?: string
    updated_at?: string
    pivot: {
        candle_id: number
        candleprice_id: number
    }
}