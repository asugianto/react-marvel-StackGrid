import { FETCH_COMIC_LIST, FETCH_COMIC_CHARACTERS } from '../actions/marvelAPITypes';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_COMIC_LIST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
        
    }

}