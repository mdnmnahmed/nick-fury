import { toast } from 'react-toastify';
import { Auth } from '../../firebase';
import { getCookie, setCookie } from '../../helpers/CookiesHelper';
import FetchAPIData from '../../helpers/FetchAPIData';
import { GET_JOURNALS, ADD_JOURNAL } from './actionTypes';

export const getJournalData = () => async dispatch => {
    try {
        if (!getCookie('db_access_token')) {
            return;
        }

        const journalsData = await FetchAPIData('get', '/home-view');
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
        toast.error(error);
    }
}

export const addNewJournal = (newJournalData) => async dispatch => {
    dispatch({
        type: ADD_JOURNAL,
        payload: newJournalData
    });
}