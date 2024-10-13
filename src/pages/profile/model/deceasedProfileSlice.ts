import {DeceasedProfileType} from "../api/deceasedProfileType.ts";
import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {deceasedProfileApi} from "../api/deceasedProfile-api.ts";


const initialState: DeceasedProfileType = {
    id: 1,
    user_id: 1,
    last_name: '',
    first_name: '',
    middle_name: '',
    gender: 'Мужской' ,
    last_name_en: '',
    first_name_en: '',
    middle_name_en: '',
    date_of_birth: '',
    date_of_death: '',
    cause_of_death:  null,
    religion_id:  null,
    country: '',
    region: '',
    city: '',
    coordinates:  null,
    grave_photo:  null,
    photos: [''],
    social_profiles: null,
    created_at: null,
    updated_at: null,
    candles: [''],
    hobbies: [''],
    work: [''],
    education: [''],
    religion:  null
}
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
                console.log(res.data.data)
                dispatch(getDeceasedProfileAC({profile: res.data.data}))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
