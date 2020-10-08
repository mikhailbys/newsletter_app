import {SIGN_IN, SIGN_OUT} from "../../constants/actionTypeConstants";

export const login = () => {
    return {
        type: SIGN_IN
    }
}

export const logout = () => {
    return {
        type: SIGN_OUT
    }
}
