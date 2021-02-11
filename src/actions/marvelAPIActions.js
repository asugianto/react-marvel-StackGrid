import { FETCH_COMIC_LIST, FETCH_COMIC_CHARACTERS } from './marvelAPITypes';
import md5 from 'md5';

import * as marvelConstants from '../constants/marvelAPI';

export const fetchComicList = () => dispatch => {
    console.log('fetching');
    fetch(
        marvelConstants.MARVEL_GET_COMICS_LIST+
        'ts=' + Date.now() +
        '&apikey=' + marvelConstants.PUBLIC_KEY +
        '&hash=' + 
        md5(Date.now().toString()+marvelConstants.PRIVATE_KEY.toString()+marvelConstants.PUBLIC_KEY.toString()))
    .then(res => res.json())
    .then(response => dispatch({
        type: FETCH_COMIC_LIST,
        payload: response.data.results
    }));
}