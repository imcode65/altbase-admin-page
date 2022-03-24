import axios from "axios";
import { altbaseUri } from "constants/apiConfig";

export const setAxiosHeader = (account: string) => {
    altbaseServer.defaults.headers.common['requester'] = account;
}

export const altbaseServer = axios.create({
    baseURL: altbaseUri,
    withCredentials: true, // required to handle the CSRF token
})

interface ILogin {
    email: string;
    password: string;
}
export default {
    async login({email, password}: ILogin) {
        try {
            let res = await altbaseServer.post("admin/auth/login", {
                email, password
            });
            console.log(res)
            return ({
                success: true,
                message: res.data,
                content: res.data
            })
        } catch (err: any) {
            console.log(err.message)
            return ({
                success: false,
                message: err,
                content: err
            })
        }
    }
}