import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import playerReducer from './playerReducer';
import redditReducer from './redditReducer';

export default combineReducers({
    item: itemReducer,
    player: playerReducer,
    reddit: redditReducer
});