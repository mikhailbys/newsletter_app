import React, {FC} from 'react';
import {Login} from "../../components/Login/Login";
import {useSelector} from "react-redux";
import {Profile} from "../../components/Profile/Profile";

export const ProtectedRoute:FC = () => {
    const isAuthorized =  useSelector<any, boolean>(state => state.loginReducer.isAuthorized);
    return (isAuthorized? <Profile isAuthorized={isAuthorized}/> : <Login/>)
}