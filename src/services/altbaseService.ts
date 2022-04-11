import axios from "axios";
import { altbaseUri } from "constants/apiConfig";

export const setAxiosHeader = (account: string) => {
    altbaseServer.defaults.headers.common['requester'] = account;
}

export const altbaseServer = axios.create({
    baseURL: altbaseUri,
    withCredentials: false, // required to handle the CSRF token
})

interface ILogin {
    email: string;
    password: string;
}
export default {
    async login({email, password}: ILogin) {
        try {
            console.log(email, password)
            let res = await altbaseServer.post("admin/auth/login", {
                email: email, password: password
            });
            console.log(res)
            return ({
                success: true,
                message: res.data,
                content: res.data
            })
        } catch (err: any) {
            console.log("Err: ", err.response)
            return ({
                success: false,
                message: err,
                content: err
            })
        }
    }
}