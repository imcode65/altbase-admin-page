import axios from "axios";
import { altbaseUri } from "constants/apiConfig";
import { localStorageTokenKey } from 'constants/keywords';

export const setAxiosHeader = (account: string) => {
    altbaseServer.defaults.headers.common['requester'] = account;
}

export const setAxiosTokenHeader = (token: string) => {
    altbaseServer.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const altbaseServer = axios.create({
    baseURL: altbaseUri,
    withCredentials: false, // required to handle the CSRF token
})

interface ILogin {
    email: string;
    password: string;
}
interface ISiteSetting {
    application_name: string;
    coin_name: string;
    coin_symbol: string;
    invite_limit: number;
    registration_invitation_bypass?: number;
    coinsmarketcap_endpoint: string;
    coinsmarketcap_api_key: string;
    logo?: string;
}
interface IDashbaord {
    totalUsersCount: number;
    emailVerifiedUsersCount: number;
    twofaActiveUsersCount: number;
    currentInviteLimit: number;
    totalCoins: number;
    successfulBnbBuys: number;
    pendingBnbBuys: number;
    failedBnbBuys: number;
}
interface IApplicationSettings {
    apiUrl: string;
    pancakeSwapRouterAddress: string;
    xTokenContractAddress: string;
    pancakeSwapRouterPathAddress: string;
    blockchainEndPoint: string;
    cointMarketAPIKey: string;
    coinMarketAPIUrl: string;
    bscscanTxnLink: string;
    cointMarketCapAPIKey: string;
    simplexVersion: string;
    simplexAPIUrl: string;
    simplexAPIKey: string;
    simplexPartner: string;
    simplexPaymentUrl: string;
    simplexPaymentFlowType: string;
    simplexReturnSuccessUrl: string;
    simplexReturnFailUrl: string;
    simplexPaymentStatusUrl: string;
    publicIPGetLink: string;
    oneSignalAppId: string;
    oneSignalSenderId: string;
    oneSignalAuthToken: string;
    oneSignalHost: string;
    oneSignalPort: string;
    min100xSellQty: string;
    wBnbContractAddress: string;
    pancakeSwapRouterAddressV2: string;
    pancakeSwapRouterEndPoint: string;
    gasLimit: string;
    bscScanAddressLink: string;
    pancakeSwapV1ExchangeUrl: string;
    pancakeSwapV2ExchangeUrl: string;
}
interface IPagination {
    page: number;
    perPage: number;
    totalCount: number;
    totalSize: number;
    totalPages: number;
}
export interface IEmailTemplate {
    id?: number;
    template_name: string;
    template_slug: string;
    template_subject: string;
    template_from: string;
    template_from_mail?: string;
    template_html?: string;
    template_variables?: string;
    created_at?: string;
}
export interface ICMS {
    id?: number;
    title: string;
    slug?: string;
    is_active: string;
    content?: string;
}
export interface ICoinCategory {
    id?: number;
    title: string;
    is_active?: string;
    allRecords?: string;
}
export interface ICoinNews {
    id?: number;
    title: string;
    coin_id: string;
    is_active?: string;
    allRecords?: string;
}

export default {
    async login({email, password}: ILogin) {
        try {
            let { data } = await altbaseServer.post("admin/auth/login", {
                email: email, password: password
            });
            if (data.status === "success") {
                setAxiosTokenHeader(data.data.token)
                localStorage.setItem(localStorageTokenKey, data.data.token);
                return ({
                    success: true,
                    message: data.message,
                    content: data.data
                })
            } else {
                return ({
                    success: false,
                    message: "Failed to login",
                    content: ""
                })
            }
        } catch (err: any) {
            return ({
                success: false,
                message: "Failed to login",
                content: err
            })
        }
    },
    // Dashboard
    async getDashboard() {
        try {
            
            let res = await altbaseServer.get("admin/dashboard/details");
            let { data, status, message }: { data: IDashbaord; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch(err: any) {
            return ({
                status: "fail",
                message: "Failed to get Dashboard",
                content: err
            })
        }
    },
    // Site Setting
    async getSiteSetting() {
        try {
            let res = await altbaseServer.get("admin/site_settings");
            let { data, status, message }: { data: ISiteSetting; status: string; message: string } = res.data;
            data.logo = data.logo?.replace("https", "http");
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to getSiteSetting",
                content: err
            })
        }
    },
    async updateSiteSetting(newData: ISiteSetting) {
        try {
            let { status, data } = await altbaseServer.put("admin/site_settings", newData)
            const result = {
                status: status,
                message: "Site settings updated successfully",
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to update site setting",
                content: err
            })
        }
    },
    // Application Setting
    async getApplicationSettings() {
        try {
            let res = await altbaseServer.get("admin/application_settings");
            let { data, status, message }: { data: IApplicationSettings; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to getSiteSetting",
                content: err
            })
        }
    },

    async updateApplicationSettings(newData : IApplicationSettings) {
        try {
            let { data } = await altbaseServer.put("admin/application_settings", newData)
            const result = {
                status: data.status,
                message: data.message,
                content: data.data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to update site setting",
                content: err
            })
        }
    },

    // Email Template

    async getEmailTemplateList(params: {
        perPage: number;
        page: number;
        searchData: IEmailTemplate,
    }) {
        try {
            let res = await altbaseServer.get("admin/email_template", {
                params: params
            });
            let { data, status, message }: { data: { pagination: IPagination; records: IEmailTemplate[] }; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to getEmailTEmplateList",
                content: err
            })
        }
    },
    async getEmailTemplateById(id: number) {
        try {
            let res = await altbaseServer.get(`admin/email_template/${id}/isView`);
            let { data, status, message }: { data: IEmailTemplate; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to getEmailTEmplateById",
                content: err
            })
        }
    },
    async addEmailTemplate(body: IEmailTemplate) {
        try {
            let res = await altbaseServer.post(`admin/email_template`, body);
            let { data, status, message }: { data: IEmailTemplate; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to getEmailTEmplateList",
                content: err
            })
        }
    },
    async updateEmailTemplate(id: number, body: IEmailTemplate) {
        try {
            let res = await altbaseServer.put(`admin/email_template/${id}`, body);
            let { data, status, message }: { data: IEmailTemplate; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to update email template",
                content: err
            })
        }
    },

    // CMS
        
    async getCMS(params: {
        perPage: number;
        page: number;
        searchData: ICMS,
    }) {
        try {
            let res = await altbaseServer.get("admin/cms", {
                params: params
            });
            let { data, status, message }: { data: { pagination: IPagination; records: ICMS[] }; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get CMS",
                content: err
            })
        }
    },
    async getCMSById(id: number) {
        try {
            let res = await altbaseServer.get(`admin/cms/${id}`);
            let { data, status, message }: { data: ICMS[]; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get CMS by id",
                content: err
            })
        }
    },
    async addCMS(body: ICMS) {
        try {
            let res = await altbaseServer.post(`admin/cms/`, body);
            let { data, status, message }: { data: ICMS; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to add CMS",
                content: err
            })
        }
    },
    async updateCMS(id: number, body: ICMS) {
        try {
            let res = await altbaseServer.put(`admin/cms/${id}`, body);
            let { data, status, message }: { data: ICMS; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to update CMS",
                content: err
            })
        }
    },

    // Coin Category

    async getCoinCategory(params: {
        perPage: number;
        page: number;
        searchData: ICoinCategory,
    }) {
        try{
            let res = await altbaseServer.get("admin/coin_categories", {
                params: params
            });
            let { data, status, message }: { data: { pagination: IPagination; records: ICoinCategory[] }; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to getCoinCategory",
                content: err
            })
        }
    },
    async getCoinCategoryById(id: number) {
        try {
            let res = await altbaseServer.get(`admin/coin_categories/${id}`);
            let { data, status, message }: { data: ICoinCategory[]; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get Coin Category by id",
                content: err
            })
        }
    },
    async updateCoinCategory(id: number, body: ICoinCategory) {
        try {
            let res = await altbaseServer.put(`admin/coin_categories/${id}`, body);
            let { data, status, message }: { data: ICoinCategory; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to update coin category",
                content: err
            })
        }
    },
    async addCoinCategory(body: ICoinCategory) {
        try {
            let res = await altbaseServer.post(`admin/coin_categories/`, body);
            let { data, status, message }: { data: ICoinCategory; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            console.log(result);
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to add coin category",
                content: err
            })
        }
    },

    // Coins News

    async getCoinNews(params: {
        perPage: number;
        page: number;
        searchData: ICoinNews,
    }) {
        try{
            let res = await altbaseServer.get("admin/coin_news", {
                params: params
            });
            let { data, status, message }: { data: { pagination: IPagination; records: ICoinNews[] }; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get coin news",
                content: err
            })
        }
    },
}

const old_token = localStorage.getItem(localStorageTokenKey)
if (old_token) {
    console.log(old_token)
    setAxiosTokenHeader(old_token);
}