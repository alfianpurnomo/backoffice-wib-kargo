import { setToken } from "../../helpers/Auth";

const initialState = {
    id_token: "",
    loading: false,
    userInfo:null
}

export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_AUTH':
            return {
                ...state,
                loading: true
            }
        case 'AUTH_SUCCESS':
            setToken(action.payload.token);
            return {
                ...state,
                loading: false
            }
        case 'GET_LOGIN_INFO':
            return {
                ...state,
                userInfo: action.payload.data
            }
        case 'AUTH_FAILED':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}