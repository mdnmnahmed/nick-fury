import { useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import BaseLayout from '../Layouts/BaseLayout';
import useStyles from './journalStyles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getJournalData } from '../../redux/actions/journalActions';
import JournalsCard from './JournalCard';

const Journals = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const allJournals = useSelector(state => state.journal.allJournals)

    useEffect(() => {
        dispatch(getJournalData());
    }, []);

    return (
        <>
            <BaseLayout>
                <Container style={{ minHeight: '90vh' }} className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {allJournals && allJournals.map(journal => (
                            <JournalsCard
                                key={journal.id}
                                journal={journal}
                            />
                        ))}
                    </Grid>
                </Container>
            </BaseLayout>
        </>
    );
}

export default Journals;