import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {feelingReducer} from "../pages/candles/model/slice.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
        feelings: feelingReducer
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