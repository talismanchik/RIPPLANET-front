import {baseApi} from "../../../services/baseApi.ts";

export const candlesApi = {
    getCandles(){
        return baseApi.get('feelings')
    },
}