import {
    SET_AUTH_USER,
} from 'store/types';

export interface IAuthInfo {
    email: string;
    name: string;
    picture?: string;
    role: string;
}

export interface IAuthState {
    isLogged: boolean;
    authInfo?: IAuthInfo;
}

interface IAction {
    type: string;
    payload: any;
}

const initialAuthState: IAuthState = {
    isLogged: false,
    authInfo: undefined,
}

const authReducer = (state = initialAuthState, action: IAction) => {
    switch (action.type) {
        case SET_AUTH_USER:
          return {
            ...state,
            authInfo: action.payload.authInfo,
          }
        default:
            return state
    }
}

export default authReducer;