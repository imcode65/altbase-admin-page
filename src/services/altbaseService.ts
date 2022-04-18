import axios from "axios";
import { altbaseUri } from "constants/apiConfig";
import { localStorageTokenKey } from 'constants/keywords';
import ForgotPassword from "pages/ForgotPassword";

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
interface IForgotPwd {
    email: string;
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
    is_active?: string;
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
    description?: string;
    thumbnail_url?: string;
    banner_url?: string;
    is_active?: string;
    coinDetails?: {
        id: number;
        coin_category_id: number;
        name: string;
        symbol: string;
        is_active: number;
    }
}
export interface IUser {
    id?: number;
    uuid?: string;
    invited_by?: number;
    invitation_code?: string;
    is_two_factor_enabled?: number;
    two_factor_secret?: any;
    email?: string;
    name?: string;
    password?: string;
    picture?: string;
    is_active?: number;
    is_notification_enabled?: number;
    presence?: number;
    invite_limit?: number;
    email_verified_at?: string;
    last_seen_at?: string;
    last_login_at?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    wallet?: {
        id?: number;
        user_id: number;
        wallet_address: string;
        balance_100x: number;
        balance_bnb: number;
        created_at: Date;
        updated_at: Date;
    };
    invitedBy?: {
        id?: number;
        email?: string;
        invitation_code?: string;
    };
    invitedCount?: number;
    roles?: [{
        id?: number;
        name?: string;
        description?: string;
    }]
}
export interface ICoin {
    id?: number;
    coin_category_id?: number;
    name?: string;
    symbol?: string;
    about?: string;
    website_url?: string;
    contract_address?: string;
    pancake_router_path_address?: string;
    pancake_router_address_version?: string;
    transfer_fee_applicable?: string;
    coinmarketcap_listed_url?: string;
    social_media_links?: string;
    is_active?: number;
    buy_criteria?: string;
    logo?: string;
    coinCategory?: ICoinCategory;
}
export interface IContractAddress {
    contract_address : string;
    pancake_router_address_version  : number;
}
export interface INotification {
    type?: string;
    user_id?: number,
    title?: string,
    description?: string
}
export interface ITx {
    id?: number;
    email?: string;
    name?: string;
    user_id?: number;
    payment_id?: string;
    status?: number;
    created_at?: string;
    updated_at?: string;
    user_details?: {
        id?: number;
        uuid?: string;
        email?: string;
        name?: string
    };
    wallet_details?: {
        id?: number;
        user_id?: number;
        wallet_address?: string;
    },
    simplex_event_details?: [{
        id?: number;
        simplex_event_id?: number;
        data?: string;
        created_at?: string;
        updated_at?: string;
    }]
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
    async forgotPassword({email}: IForgotPwd) {
        try {
            const res = await altbaseServer.post("admin/auth/forgot_password", {
                email: email
            });
            let { status, message }: { status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: {}
            }
            return result;
        } catch (err: any) {
            if (err?.response?.data) {
                return ({
                    status: 'failed',
                    message: err?.response?.data.message,
                    content: err
                })
            } else {
                return ({
                    status: 'failed',
                    message: "Failed",
                    content: err
                })
            }
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
            console.log(body);
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

    async getCoinNewsById(id: number) {
        try {
            let res = await altbaseServer.get(`admin/coin_news/${id}`);
            let { data, status, message }: { data: ICoinNews[]; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get Coin-News by id",
                content: err
            })
        }
    },
    async addCoinNews(body: ICoinNews) {
        try {
            let res = await altbaseServer.post(`admin/coin_news/`, body);
            console.log(body);
            let { data, status, message }: { data: ICoinNews; status: string; message: string } = res.data;
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
    async updateCoinNews(id: number, body: ICoinNews) {
        try {
            let res = await altbaseServer.put(`admin/coin_news/${id}`, body);
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
    // Users

    async generateUUID() {
        try{
            let res = await altbaseServer.post("admin/users/generate_uuid");
            let { status, message }: { status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: {}
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to generate UUID",
                content: err
            })
        }
    },
    async getUsersList(params: {
        perPage: number;
        page: number;
        searchData: IUser, // only name, email, email_verified_at, is_two_factor_enabled, is_active
    }) {
        try{
            let res = await altbaseServer.get("admin/users", {
                params: params
            });
            let { data, status, message }: { data: { pagination: IPagination; records: IUser[] }; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get users list",
                content: err
            })
        }
    },
    async addUser(body: {
        name: string;
        email: string;
        password: string;
        confirm_password: string;
        role?: string;
    }) {
        try {
            body.role = "user";
            let res = await altbaseServer.post(`admin/users`, body);
            let { data, status, message }: { data?: IUser; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to register new user",
                content: err
            })
        }
    },
    async getUser(id: number) {
        try{
            let res = await altbaseServer.get(`admin/users/${id}`);
            let { data, status, message }: { data: IUser; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get user detail",
                content: err
            })
        }
    },
    async updateUser(id: number, body: IUser) {
        try {
            let res = await altbaseServer.put(`admin/users/${id}`, body);
            let { data, status, message }: { data: IUser; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to update user",
                content: err
            })
        }
    },

    // Coins

    async addCoin(body: ICoin) {
        try {
            let res = await altbaseServer.post(`admin/coins`, body);
            let { data, status, message }: { data?: ICoin; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to register new coin",
                content: err
            })
        }
    },
    async verifyContractAddress(body: IContractAddress) {
        try {
            let res = await altbaseServer.post(`admin/coins/verify_contract_address`, body);
            let { data, status, message }: { data?: IContractAddress; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to register new coin",
                content: err
            })
        }
    },
    async getCoinList(params: {
        perPage: number;
        page: number;
        searchData: ICoin, // only name, email, email_verified_at, is_two_factor_enabled, is_active
    }) {
        try{
            let res = await altbaseServer.get("admin/coins", {
                params: params
            });
            let { data, status, message }: { data: { pagination: IPagination; records: ICoin[] }; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get coins list",
                content: err
            })
        }
    },
    async getCoinById(id: number) {
        try {
            let res = await altbaseServer.get(`admin/coins/${id}`);
            let { data, status, message }: { data: ICoin; status: string; message: string } = res.data;
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
    async updateCoin(id: number, body: ICoin) {
        try {
            let res = await altbaseServer.put(`admin/coins/${id}`, body);
            let { data, status, message }: { data: ICoin; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to update coin",
                content: err
            })
        }
    },
    async updateCoinStatus(id: number, body: {
        is_active: number
    }) {
        try {
            let res = await altbaseServer.put(`admin/coins/status/${id}`, body);
            let { data, status, message }: { data: {is_active: number}; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to update coin status",
                content: err
            })
        }
    },
    async getSocialMediaType() {
        try {
            let res = await altbaseServer.get(`admin/coins/social_media_type`);
            let { data, status, message }: { data: any[]; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get social media types",
                content: err
            })
        }
    },

    // Notification

    async pushNotification(body: INotification) {
        try {
            let res = await altbaseServer.post(`admin/notification/send_push_notification`, body);
            let { data, status, message }: { data?: INotification; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to register new coin",
                content: err
            })
        }
    },

    // Tx History

    async getTxHistory(params: {
        perPage: number;
        page: number;
        searchData: ITx, // only name, email, email_verified_at, is_two_factor_enabled, is_active
    }) {
        try{
            let res = await altbaseServer.get("admin/transaction_history/buy_bnb", {
                params: params
            });
            let { data, status, message }: { data: { pagination: IPagination; records: ITx[] }; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get tx history list",
                content: err
            })
        }
    },
    async getTxHistoryById(id: number) {
        try {
            let res = await altbaseServer.get(`admin/transaction_history/buy_bnb/details/${id}`);
            let { data, status, message }: { data: ITx; status: string; message: string } = res.data;
            const result = {
                status: status,
                message: message,
                content: data
            }
            return result;
        } catch (err: any) {
            return ({
                status: "fail",
                message: "Failed to get Tx History",
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