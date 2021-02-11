import { combineReducers } from 'redux';
import marvelAPIReducer from './marvelAPIReducer';

export default combineReducers({
    comics: marvelAPIReducer
})