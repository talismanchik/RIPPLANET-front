import {DeceasedProfileType, initialState} from "../api/deceasedProfileType.ts";
import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {deceasedProfileApi} from "../api/deceasedProfile-api.ts";



const deceasedProfileSlice  = createSlice({
    name: 'deceaseds',
    initialState: initialState,
    reducers: {
        getDeceasedProfileAC(_, action: PayloadAction<{profile: DeceasedProfileType}>) {
            return action.payload.profile
        }
    }
})

export const deceasedProfileReducer = deceasedProfileSlice.reducer
export const {getDeceasedProfileAC}=deceasedProfileSlice.actions

export const getDeceasedProfileTC = (id: number) => {
    return (dispatch: Dispatch) => {
        deceasedProfileApi.getDeceasedProfile(id)
            .then(res => {
                dispatch(getDeceasedProfileAC({profile: res.data.data}))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
