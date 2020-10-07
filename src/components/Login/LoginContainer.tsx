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

    const dispatch = useDispatch();
    const history = useHistory();

    const handleUsernameInput: ChangeEventHandler<HTMLInputElement> = (event) =>
        setUsername(event.target.value);
    const handlePasswordInput: ChangeEventHandler<HTMLInputElement> = (event) =>
        setPassword(event.target.value);



    // usecallback для onclick-а
    const loginFormSubmitHandler = useCallback((e) => {
        console.log('e', e);
        //e.preventDefault();
        const isLogged = checker({username, password});
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
    />;
}