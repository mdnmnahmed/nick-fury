import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import journalReducer from './journalReducer';

const rootReducers = combineReducers({
    profile: profileReducer,
    journal: journalReducer
});

export default rootReducers;