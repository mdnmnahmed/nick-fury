import { SET_PROFILE_DATA, RESET_PROFILE_DATA } from '../actions/actionTypes';

const initialState = {
    profileData: {}
}

const profileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PROFILE_DATA:
            return { ...state, data: payload };

        case RESET_PROFILE_DATA:
            return {};

        default:
            return state;
    }
}
export default profileReducer;