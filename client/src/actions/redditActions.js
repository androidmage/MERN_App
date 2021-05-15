import { GET_HOURS, GET_SENTIMENTS } from '../actions/types';
import axios from 'axios';

export const getHours = () => dispatch => {
    axios
        .get('/api/reddit/hours')
        .then(res => 
            dispatch({
                type: GET_HOURS,
                payload: res.data
            })
        );
};

export const getSentiments = () => dispatch => {
    axios
        .get('/api/reddit/sentiments')
        .then(res => 
            dispatch({
                type: GET_SENTIMENTS,
                payload: res.data
            })
        );
};
