import React, {ChangeEventHandler, useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {login} from "../../store/actions/actions";
import {FieldT, UserCredentialsT} from "./types";
import {Login} from "./Login";
import {yupResolver} from "@hookform/resolvers";
import {loginSchema} from "./validationScheme";
import {useForm} from "react-hook-form";

const checker = (credentials: UserCredentialsT) =>
    credentials.username === 'Admin' && credentials.password === '12345';

export const LoginContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm<Record<string, FieldT>>({
        resolver: yupResolver(loginSchema)
    });

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorHidden, setErrorHidden] = useState<boolean>(false);

    const handleUsernameInput: ChangeEventHandler<HTMLInputElement> = (event) =>
        setUsername(event.target.value);
    const handlePasswordInput: ChangeEventHandler<HTMLInputElement> = (event) =>
        setPassword(event.target.value);

    const loginFormSubmitHandler = useCallback(() => {
        setUsername("");
        setPassword("");
        //e.preventDefault();
        const isLogged = checker({username, password});
        setErrorHidden(!isLogged);
        if (isLogged) {
            dispatch(login());
            localStorage.setItem('isAuthorized', JSON.stringify(isLogged));
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            history.push("/");
        } 
    }, [dispatch, history, password, username])
    return <Login
        username={username}
        password={password}
        handleUsernameInput={handleUsernameInput}
        handlePasswordInput={handlePasswordInput}
        loginFormSubmitHandler={loginFormSubmitHandler}
        errorHidden={!errorHidden}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
    />;
}