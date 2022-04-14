import {
    SET_AUTH_USER
} from 'store/types';
import { AppDispatch } from 'store';
import { IAuthInfo } from 'store/reducers/authReducer';

export const setAuthUser = (authInfo: IAuthInfo) => async (dispatch: AppDispatch) => {
    dispatch({
        type: SET_AUTH_USER,
        payload: {
            authInfo: authInfo
        }
    })
}