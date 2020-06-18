import { SEARCH_MOVIE_START, SEARCH_MOVIE_COMPLETE, SEARCH_MOVIE_ERROR } from '../../consts/actionTypes';
import { put, call, takeLatest } from 'redux-saga/effects'

import { apiCall } from '../api';

export function* searchMovie({payload}) {
    try{
        const results = yield call(apiCall, `&s=${payload.movieName}`, null, null, 'GET');
        yield put({type: SEARCH_MOVIE_COMPLETE, results}); 
    } catch(error) {
        yield put({type: SEARCH_MOVIE_ERROR, error})
    }
}

export default function* search() {
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
}