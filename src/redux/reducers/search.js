import { SEARCH_MOVIE_START, SEARCH_MOVIE_COMPLETE, SEARCH_MOVIE_ERROR } from '../../consts/actionTypes';
import { get } from 'lodash';

const initialState = {}

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_MOVIE_START:
            return {...state};
            break;
        case SEARCH_MOVIE_COMPLETE:
            return {...state};
            break;
        case SEARCH_MOVIE_ERROR:
            return {...state};
            break;
        default: 
            return {...state};
    }
}