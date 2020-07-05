import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist"
import storage from "localforage"

import pageInfo from './pageInfo';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['pageInfo']
}

const rootReducer = combineReducers({
    pageInfo
});

export default persistReducer(persistConfig, rootReducer);