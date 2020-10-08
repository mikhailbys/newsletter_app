import React, {ChangeEventHandler, useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {login} from "../../store/actions/actions";
import {UserCredentialsT} from "./types";
import {Login} from "./Login";

const checker = (credentials: UserCredentialsT) =>
    credentials.username === 'Admin' && credentials.password === '12345';

export const LoginContainer = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorHidden, setErrorHidden] = useState<boolean>(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleUsernameInput: ChangeEventHandler<HTMLInputElement> = (event) =>
        setUsername(event.target.value);
    const handlePasswordInput: ChangeEventHandler<HTMLInputElement> = (event) =>
        setPassword(event.target.value);

    const loginFormSubmitHandler = useCallback((e) => {
        //e.preventDefault();
        const isLogged = checker({username, password});
        setErrorHidden(!isLogged);
        isLogged && dispatch(login());
        localStorage.setItem('isAuthorized', JSON.stringify(isLogged));
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        isLogged && history.push("/");
    }, [dispatch, history, password, username])
    return <Login
        username={username}
        password={password}
        handleUsernameInput={handleUsernameInput}
        handlePasswordInput={handlePasswordInput}
        loginFormSubmitHandler={loginFormSubmitHandler}
        errorHidden={!errorHidden}
    />;
}