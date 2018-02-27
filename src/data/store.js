import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { Reducers } from '../reducers/index';

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = () => {
	let store = createStore(persistedReducer, applyMiddleware(thunk));
	let persistor = persistStore(store)
  	return { store, persistor }
};

export default store;