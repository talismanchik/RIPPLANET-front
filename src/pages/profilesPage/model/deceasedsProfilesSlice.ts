import {DeceasedsProfilesType} from "../api/deceasedsProfilesType.ts";
import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
 import {deceasedsApi} from "../api/deceasedsProfiles-api.ts";

const initialState: DeceasedsProfilesType[] = []
const deceasedsSlice = createSlice({
    name: 'deceaseds',
    initialState: initialState,
    reducers: {
        getDeceasedsAC(_, action: PayloadAction<{deceaseds: DeceasedsProfilesType[]}>) {
            return action.payload.deceaseds
        }
    }
})

export const deceasedsReducer = deceasedsSlice.reducer
export const {getDeceasedsAC}=deceasedsSlice.actions

export const getDeceasedsTC = () => {
    return (dispatch: Dispatch) => {

        deceasedsApi.getDeceasedsProfiles()
            .then(res => {
                dispatch(getDeceasedsAC({deceaseds: res.data.data}))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
