import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { linksReducer, metadataReducer, newLinkReducer } from './linksReducer';
import { categoriesReducer } from './categoriesReducer';

export const Reducers = combineReducers({
	linksReducer,
	newLinkReducer,
	metadataReducer,
	authReducer,
	categoriesReducer,
});

export default Reducers;