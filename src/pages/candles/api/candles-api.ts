import {baseApi} from "../../../services/baseApi.ts";

export const candlesApi = {
    getFeelings(){
        return baseApi.get('feelings')
    },
    getCandles(){
        return baseApi.get('candles')
    },
}