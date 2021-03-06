import React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    Grid,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import useStyles from './styles'
import {PropsT} from "./types";

export const Login = ({
                          username,
                          password,
                          handleUsernameInput,
                          handlePasswordInput,
                          loginFormSubmitHandler,
                          errorHidden,
                          register,
                          handleSubmit,
                          errors
                      }:PropsT) => {
    const styles = useStyles();

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
                    <form
                        className={styles.form}
                        noValidate
                        onSubmit={handleSubmit(loginFormSubmitHandler)}
                    >
                        <TextField
                            inputRef={register}
                            error={!!errors.username}
                            helperText={errors.username ? errors.username.message : ''}
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
                            inputRef={register}
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : ''}
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
                        <Typography
                            color="error"
                            hidden={errorHidden}
                            className={styles.error}
                            variant="h6" >
                            Invalid credentials
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={styles.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}