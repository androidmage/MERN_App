import { GET_NAMES } from '../actions/types';

const initialState = {
    names: [],
    years: [],
    player: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_NAMES:
            return {
                ...state,
                names: action.payload,
            }
        default:
            return state;
    }
}