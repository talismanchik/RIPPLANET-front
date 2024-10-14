import {baseApi} from "../../../services/baseApi.ts";

export const usersApi = {
   getUsersProfile(){
        return baseApi.get('users')
    },
}