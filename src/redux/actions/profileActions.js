import { SET_PROFILE_DATA, RESET_PROFILE_DATA } from './actionTypes';

export const setProfileData = (data) => dispatch => {
    dispatch({
        type: SET_PROFILE_DATA,
        payload: data
    });
}

export const reSetProfileData = () => dispatch => {
    dispatch({
        type: RESET_PROFILE_DATA,
    });
}