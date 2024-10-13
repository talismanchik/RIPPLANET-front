import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {feelingReducer} from "../pages/candles/model/feelingsSlice.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {candlesReducer} from "../pages/candles/model/candlesSlice.ts";
import {deceasedsReducer} from "../pages/profilesPage/model/deceasedsProfilesSlice.ts";
import {deceasedProfileReducer} from "../pages/profile/model/deceasedProfileSlice.ts";

const rootReducer = combineReducers({
        feelings: feelingReducer,
        candles: candlesReducer,
        deceaseds: deceasedsReducer,
        deceasedProfile: deceasedProfileReducer
    }
)
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatchType<Arg = void> = ThunkDispatch<AppRootStateType, Arg, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})