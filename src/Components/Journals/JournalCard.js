import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import useStyles from './journalStyles';

const JournalCard = ({ journal }) => {
    const classes = useStyles();

    return (
        <Grid item key={journal.id} xs={12} sm={6} md={4} >
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="./images/svgs/talking-characters.svg"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {journal.headlines}
                    </Typography>
                    <Typography>
                        {journal.description}
                    </Typography>
                    <br />
                    <Grid container spacing={3} style={{ color: 'grey' }}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2">Elated</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2">{new Date().toLocaleDateString()}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default JournalCard;