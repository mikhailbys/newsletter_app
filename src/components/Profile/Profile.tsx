import React, {FC} from 'react';
import {Card, Typography} from "@material-ui/core";
import useStyles from './styles'
import {PropsT} from "./types";

export const Profile:FC<PropsT> = (isAuthorized) => {
    const styles = useStyles();
    return (
        <>
            <Card className={styles.card}>
                <Typography variant="h4">
                    isAuthorized:{isAuthorized ? " Yes" : " No"}
                </Typography>
                <Typography variant="body1">
                    This is your personal information
                </Typography>
                <Typography>
                    Username: {localStorage.getItem('username')}
                </Typography>
                <Typography>
                    Password: {localStorage.getItem('password')}
                </Typography>
            </Card>
        </>
    );
}