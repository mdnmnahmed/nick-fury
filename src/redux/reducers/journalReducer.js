import { GET_JOURNALS, ADD_JOURNAL } from '../actions/actionTypes';

const initialState = {
    allJournals: []
}

const journalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_JOURNALS:
            return { ...state, allJournals: payload };

        case ADD_JOURNAL:
            return { ...state, allJournals: [payload, ...state] };

        default:
            return state;
    }
}

export default journalReducer;