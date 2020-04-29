import { takeEvery, call, put } from 'redux-saga/effects'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import ShopActionTypes from './shop.types'

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

export function* fetchCollectionsAsync() {
    yield console.log("IVE BEEN FIRED")
    try {
        const collectionRef = firestore.collection('collecions');
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
yield put(fetchCollectionsFailure(error.message))
    }
   
}
export default function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync)
}