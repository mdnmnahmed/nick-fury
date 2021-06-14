import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Auth } from '../../firebase';
import { setCookie } from '../../helpers/CookiesHelper';
import FetchAPIData from '../../helpers/FetchAPIData';
import { GET_JOURNALS, ADD_JOURNAL } from './actionTypes';

export const getJournalData = () => async dispatch => {
    try {
        const journalsData = await FetchAPIData('get', '/home-view');
        console.log('getJournalsData: ', journalsData);

        if (journalsData.data.data) {
            dispatch({
                type: GET_JOURNALS,
                payload: journalsData.data.data
            });
        } else {
            if (journalsData.data.message == 'Signature has expired') {
                await Auth.signOut();
                setCookie('db_access_token', null, 1);
                toast.error(journalsData.data.message + ', please login again');
            } else {
                throw journalsData.data.message;
            }
        }

    } catch (error) {
        console.log('Error occur in Getting Journals', error);
        toast.error(error);
    }
}

export const addNewJournal = (newJournalData) => async dispatch => {
    try {
        const savedJournalsResponse = await FetchAPIData('post', '/home-view', newJournalData);
        dispatch({
            type: ADD_JOURNAL,
            payload: newJournalData
        });
    } catch (error) {
        console.log('Error occur in Getting Journals', error);
    }
}