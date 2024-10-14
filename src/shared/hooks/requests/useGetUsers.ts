import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {useEffect} from "react";
import {UserType} from "../../../pages/users/api/usersType.ts";
import {getUsersTC} from "../../../pages/users/model/usersSlice.ts";

export const useGetUsers = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector<UserType[]>(state => state.users)

    useEffect(() => {
        users.length == 0 && dispatch(getUsersTC())
    }, [])
    return users
}