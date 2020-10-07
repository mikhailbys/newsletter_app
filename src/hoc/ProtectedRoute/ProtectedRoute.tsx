import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {Profile} from "../../components/Profile/Profile";
import {LoginContainer} from "../../components/Login/LoginContainer";

export const ProtectedRoute:FC = () => {
    const isAuthorized =  useSelector<any, boolean>(state => state.loginReducer.isAuthorized);
    return (isAuthorized? <Profile isAuthorized={isAuthorized}/> : <LoginContainer/>)
}