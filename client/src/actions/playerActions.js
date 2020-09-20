import { GET_NAMES, GET_YEARS, GET_PLAYER } from './types';
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

export const getYears = (name) => dispatch => {
    axios
        .get('/api/players/years?name=' + name)
        .then(res => 
            dispatch({
                type: GET_YEARS,
                payload: res.data
            })
        );
};

export const getPlayer = (name, year) => dispatch => {
    axios
        .get('/api/players?name=' + name + '&year=' + year)
        .then(res => 
            dispatch({
                type: GET_PLAYER,
                payload: res.data
            })
        );
};