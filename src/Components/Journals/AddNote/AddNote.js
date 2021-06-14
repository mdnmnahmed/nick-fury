import { useEffect, useState } from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import BaseLayout from '../../Layouts/BaseLayout';
import useStyles from './addNoteStyles';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import FetchAPIData from '../../../helpers/FetchAPIData';

const AddNote = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    

    return (
        <>
            <BaseLayout>
                <Container center style={{ minHeight: '85vh' }} className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={0} direction="column" alignItems="center" justify="center">
                        <form onSubmit={addNoteHandler}>
                            <input type="text" className={classes.titleInput} placeholder="Title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            <br /> <br />
                            <input type="text" className={classes.descriptionInput} placeholder="Start writing..."
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />

                            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ paddingTop: '50%' }}>
                                <Button type="submit" variant="container" color="" className={classes.submit}>
                                    Save
                                </Button>
                            </Grid>
                        </form>



                    </Grid>
                </Container>
            </BaseLayout>
        </>
    );
}

export default AddNote;