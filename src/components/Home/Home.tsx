import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import homeImgSource from '../../resources/forest.jpg'
import useStyles from './styles'

export const Home = () => {
    const styles = useStyles();
    return (
    <>
        <Paper className={styles.paper}>
            <img
                className={styles.image}
                src={homeImgSource}
                alt="Forest"
            />
            <div>
                <section>
                    <Typography
                        variant="h3"
                        align="center"
                    >
                        Home page
                    </Typography>
                    <p
                        className={styles.p}
                    >
                        This is a paragraph of the home page.
                    </p>
                </section>
            </div>
        </Paper>
    </>
    );
}