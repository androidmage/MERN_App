import { GET_HOURS, GET_SENTIMENTS } from '../actions/types';

const initialState = {
    hours: [],
    sentiments: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_HOURS:
            return {
                ...state,
                hours: action.payload
            }
        case GET_SENTIMENTS:
            return {
                ...state,
                sentiments: action.payload
            }
        default:
            return state;
    }
}
