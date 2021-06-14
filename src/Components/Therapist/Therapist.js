import React from 'react';
import { Card, Grid, Typography, Container } from '@material-ui/core';
import BaseLayout from '../Layouts/BaseLayout';
import useStyles from './therapistStyles';
import { Link } from 'react-router-dom';

const therapists = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Therapist = () => {
    const classes = useStyles();

    return (
        <>
            <BaseLayout>
                <Container style={{ minHeight: '90vh' }} className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {therapists.map((therapist) => (
                            <Grid item key={therapist} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={2}>
                                            <div className={classes.peopleCard}>
                                                <img src="./images/default_pic.png" style={{ width: '40px' }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className={classes.peopleCard}>
                                                <Typography variant="subtitle2">
                                                    Therapist Name
                                                </Typography>
                                                <Typography variant="caption">
                                                    Description
                                                </Typography>
                                                <br />
                                                <div>
                                                    <Link style={{ textDecoration: 'none', color: 'grey', }} to="/">view details</Link>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div className={classes.peopleCard}>
                                                <img src="./images/svgs/heart-active.svg" style={{ marginLeft: '15px' }} />
                                                <br /> <br />
                                                <Link to='/'><img src="./images/svgs/book-button.svg" /></Link>
                                            </div>
                                        </Grid>
                                    </Grid>

                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </BaseLayout>
        </>
    );
}

export default Therapist;