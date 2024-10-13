import {baseApi} from "../../../services/baseApi.ts";

export const deceasedsApi = {
    getDeceasedsProfiles(){
        return baseApi.get('deceaseds')
    },
}