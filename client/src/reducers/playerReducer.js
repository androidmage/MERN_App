import { GET_NAMES, GET_YEARS, GET_PLAYER } from '../actions/types';

const initialState = {
    names: [],
    years: [],
    player: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_NAMES:
            return {
                ...state,
                names: action.payload,
            }
        case GET_YEARS:
            return {
                ...state,
                years: action.payload
            }
        case GET_PLAYER:
            return {
                ...state,
                player: action.payload
            }
        default:
            return state;
    }
}