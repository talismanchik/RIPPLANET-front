import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
 import {UserType} from "../api/usersType.ts";
import {usersApi} from "../api/users-api.ts";

const initialState: UserType[] = []
const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        getUsersAC(_, action: PayloadAction<{users: UserType[]}>) {
            return action.payload.users
        }
    }
})

export const usersReducer = usersSlice.reducer
export const {getUsersAC}=usersSlice.actions

export const getUsersTC = () => {
    return (dispatch: Dispatch) => {

        usersApi.getUsersProfile()
            .then(res => {
                dispatch(getUsersAC({users: res.data.data}))
            })
            .catch(error => {
                console.log(error)
            })
    }
}