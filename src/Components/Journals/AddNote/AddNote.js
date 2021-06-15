import { useState } from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import BaseLayout from '../../Layouts/BaseLayout';
import useStyles from './addNoteStyles';
import { toast } from 'react-toastify';
import FetchAPIData from '../../../helpers/FetchAPIData';
import { useHistory } from 'react-router-dom';
import Loader from '../../Layouts/Loader';

const AddNote = () => {
    const classes = useStyles();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [addNoteLoader, setAddNoteLoader] = useState(false);

    const addNoteHandler = async (event) => {
        event.preventDefault();

        if (!title || !description) {
            toast.error('Enter Title & Description');
            return;
        }

        setAddNoteLoader(true);

        try {
            const newNoteData = {
                headlines: title,
                description
            }

            const noteResponse = await FetchAPIData('post', '/home-view', newNoteData);
            if (noteResponse.data.status == 'OK') {
                toast(title + ' - Note Saved');
                setAddNoteLoader(false);
                history.push('/');
            } else {
                setAddNoteLoader(false);
                throw 'Error with Database'
            }
        } catch (error) {
            toast.error('Failed to Add Note, ', error);
        }
    }

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
                                    Save {addNoteLoader && <Loader />}
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