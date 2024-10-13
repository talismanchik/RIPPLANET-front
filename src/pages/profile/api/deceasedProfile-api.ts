import {baseApi} from "../../../services/baseApi.ts";

export const deceasedProfileApi = {
    getDeceasedProfile(id: number){
        return baseApi.get(`deceaseds/${id}`)
    },
}