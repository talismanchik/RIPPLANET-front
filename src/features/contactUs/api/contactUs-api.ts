import {baseApi} from "../../../services/baseApi.ts";
import {ContactUsType} from "./contactUsType.ts";

export const contactUsApi = {
    postContactUs(form: ContactUsType){
        return baseApi.post('contact_us', {...form})
    },
}