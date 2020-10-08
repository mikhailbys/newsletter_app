import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {Link, useHistory} from "react-router-dom";
import {Button, Typography} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import {logout} from "../../store/actions/actions";
import useStyles from './styles'

export const LoginButton = () => {
    const styles = useStyles();
    const isAuthorized = useSelector<any, boolean>(state => state.loginReducer.isAuthorized);
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutHandler = () => {
        localStorage.clear();
        history.push("/");
        dispatch(logout());
    }

    return (isAuthorized ?
        <>
            <div className={styles.iconButton}>
            <Typography variant="h6" className={styles.span}>
                {localStorage.getItem('username')}
            </Typography>
                <AccountCircle/>
            </div>
            <Button
                className={styles.typography}
                onClick={logoutHandler}
                color="inherit"
            >
                LOG OUT
            </Button>
            </>
        :
        <Button
            className={styles.button}
            variant="contained"
            component={Link}
            to="/login"
            color="secondary"
        >
            Login
        </Button>)
}