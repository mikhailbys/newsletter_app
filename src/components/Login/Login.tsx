import React, {ChangeEventHandler, useCallback, useState} from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    Grid,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/actions";
import useStyles from './styles'
import {UserCredentialsT} from "./types";
import {useHistory} from "react-router-dom";

const checker = (credentials: UserCredentialsT) => credentials.username === 'Admin' && credentials.password === '12345';

export const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();
    const styles = useStyles();
    const history = useHistory();

    const handleUsernameInput: ChangeEventHandler<HTMLInputElement> = (event) => setUsername(event.target.value);
    const handlePasswordInput: ChangeEventHandler<HTMLInputElement> = (event) => setPassword(event.target.value);

    // usecallback для onclick-а
    const loginFormSubmitHandler = useCallback((e) => {
        e.preventDefault();
        const isLogged = checker({username, password});
        isLogged && dispatch(login());
        localStorage.setItem('isAuthorized', JSON.stringify(isLogged));
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        isLogged && history.push("/");
    }, [dispatch, password, username])

    return (
        <Grid container component="main" className={styles.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={styles.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={styles.paper}>
                    <Avatar className={styles.avatar}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in to see your personal information
                    </Typography>
                    <form className={styles.form} noValidate>
                        <TextField
                            value={username}
                            onChange={handleUsernameInput}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            value={password}
                            onChange={handlePasswordInput}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={styles.submit}
                            onClick={loginFormSubmitHandler}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}