import {loggedState} from "../types/types";
import {LogInActionT} from "./types";

export const initialParams: loggedState = {
    isAuthorized: false
}

export const loginReducer = (state = initialParams, action: LogInActionT) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { isAuthorized: true }
        case 'SIGN_OUT':
            return { isAuthorized: false };
        default:
            return state
    }
}