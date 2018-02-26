import { combineReducers } from 'redux';

import { linksReducer } from './linksReducer';
import { authReducer } from './authReducer';

export const Reducers = combineReducers({
	linksReducer,
	authReducer
});

export default Reducers;