import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Container } from '@material-ui/core';
import BaseLayout from '../Layouts/BaseLayout';
import useStyles from './journalStyles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Journals = () => {
    const classes = useStyles();

    return (
        <>
            <BaseLayout>
                <Container style={{ minHeight: '100vh' }} className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="./images/svgs/talking-characters.svg"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                        <br />
                                        <Grid container spacing={3} style={{ color: 'grey' }}>
                                            <Grid item xs={6}>
                                                <Typography variant="subtitle2">Feeling</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant="subtitle2">Date</Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </BaseLayout>
        </>
    );
}

export default Journals;