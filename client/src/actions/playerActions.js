import { GET_NAMES } from './types';
import axios from 'axios';

export const getNames = () => dispatch => {
    axios
        .get('/api/players/names')
        .then(res => 
            dispatch({
                type: GET_NAMES,
                payload: res.data
            })
        );
};