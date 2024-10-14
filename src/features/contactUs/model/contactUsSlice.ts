import {ContactUsType} from "../api/contactUsType.ts";
import {contactUsApi} from "../api/contactUs-api.ts";

export const sendContactUsFormTC = (form: ContactUsType) => {
    return () => {
        contactUsApi.postContactUs(form)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
}