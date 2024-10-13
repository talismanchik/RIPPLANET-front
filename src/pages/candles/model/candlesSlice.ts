import {CandlesType} from "../api/candlesType.ts";
import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {candlesApi} from "../api/candles-api.ts";

const initialState: CandlesType[] = []
const candlesSlice = createSlice({
    name: 'feelings',
    initialState: initialState,
    reducers: {
        getCandlesAC(_, action: PayloadAction<{candles: CandlesType[]}>) {
            return action.payload.candles.map(el=>({...el, image: `${import.meta.env.VITE_BASE_URL}${el.image}`}))
        }
    }
})

export const candlesReducer = candlesSlice.reducer
export const {getCandlesAC}=candlesSlice.actions

export const getCandlesTC = () => {
    return (dispatch: Dispatch) => {

        candlesApi.getCandles()
            .then(res => {
                dispatch(getCandlesAC({candles: res.data.data}))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
