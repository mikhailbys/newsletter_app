import {ChangeEventHandler} from "react";

export interface UserCredentialsT {
    username: string,
    password: string;
}

export interface PropsT {
    username: string,
    password: string,
    handleUsernameInput:  ChangeEventHandler<HTMLInputElement>,
    handlePasswordInput: ChangeEventHandler<HTMLInputElement>,
    loginFormSubmitHandler: (e: any) => void,
    errorHidden: boolean
}