import { all } from 'redux-saga/effects';

// Sagas
import search from './search';

export default function* rootSaga() {
	yield all([search()]);
}
