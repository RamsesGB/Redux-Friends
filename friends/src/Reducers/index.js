import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../Actions/index';

const initialState = {
    fetchingData: false,
    loggingIn: false,
    friends: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
            };
        case FETCH_DATA_START:
            return {
                ...state,
                fetchingData: true,
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                fetchingData: false,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                friends: [...state, ],
                fetchingData: false,                
            }
    }
}