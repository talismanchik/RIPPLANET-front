import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {DeceasedsProfilesType} from "../../../pages/profilesPage/api/deceasedsProfilesType.ts";
import {useEffect} from "react";
import {getDeceasedsTC} from "../../../pages/profilesPage/model/deceasedsProfilesSlice.ts";

export const useDeceasedsProfiles = ()=>{
    const dispatch = useAppDispatch()
    const deceaseds = useAppSelector<DeceasedsProfilesType[]>(state => state.deceaseds)

    useEffect(() => {
        deceaseds.length == 0 && dispatch(getDeceasedsTC())
    }, [])
    return deceaseds
}