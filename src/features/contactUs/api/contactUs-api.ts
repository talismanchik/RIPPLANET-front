import {baseApi} from "../../../services/baseApi.ts";

export const contactUsApi = {
    postContactUs(form: any){
        return baseApi.post('contact_us', {first_name: form.first_name, last_name: form.last_name, email: form.email, phone: form.phone, message: form.message})
    },
}