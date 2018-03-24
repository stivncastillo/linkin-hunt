import { combineReducers } from 'redux';

import { linksReducer } from './linksReducer';
import { authReducer } from './authReducer';
import { categoriesReducer } from './categoriesReducer';

export const Reducers = combineReducers({
	linksReducer,
	authReducer,
	categoriesReducer
});

export default Reducers;