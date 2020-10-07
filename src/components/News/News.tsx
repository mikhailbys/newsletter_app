import React, {FC} from 'react';
import {CardContent, Grid, Paper, Typography} from "@material-ui/core";
import useStyles from './styles'
import {PropsT} from "./types";

export const News:FC<PropsT> = ({ news}) => {
    const classes = useStyles();
        return (
                <Grid container style={{}} spacing={2} justify="space-between" alignItems="stretch">
                    {
                        news.map(article =>
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                <Paper className={classes.paper}>
                                    <CardContent className={classes.EntryCard} key={article.index}>
                                        <Typography variant="h4">
                                            {article.source.name}
                                        </Typography>
                                        <img
                                            className={classes.media}
                                            src={article.urlToImage}
                                            alt={article.title}
                                        />
                                        <Typography variant="body1">
                                            {article.content}
                                        </Typography>
                                        <Typography variant="caption" className={classes.textMargins}>
                                            {article.author} on {article.publishedAt}
                                        </Typography>
                                    </CardContent>
                                </Paper>
                            </Grid>
                        )}
                </Grid>
        );
}