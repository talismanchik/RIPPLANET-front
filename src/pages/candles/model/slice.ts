import {FeelingsType} from "../api/candlesType.ts";
import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {candlesApi} from "../api/candles-api.ts";

const initialState: FeelingsType[] = []
const slice = createSlice({
    name: 'feelings',
    initialState: initialState,
    reducers: {
        getFeelingsAC(_, action: PayloadAction<{ feelings: FeelingsType[] }>) {
            console.log(`${import.meta.env.VITE_BASE_URL}uploads/images/1728761016.jpg`)
            return action.payload.feelings.map(el=>({...el, image:  `${import.meta.env.VITE_BASE_URL}${el.image}`}))
        }
    }
})

export const feelingReducer = slice.reducer
export const {getFeelingsAC}=slice.actions

export const getFeelingsTC = () => {
    return (dispatch: Dispatch) => {

        candlesApi.getCandles()
            .then(res => {
                dispatch(getFeelingsAC({ feelings: res.data.data}))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
