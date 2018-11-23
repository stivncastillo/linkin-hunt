import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
import { alertReducer } from './alertReducer';

const rootReducer = combineReducers({
  firebase,
  alertReducer,
});

export default rootReducer;
