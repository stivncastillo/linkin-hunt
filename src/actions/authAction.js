import * as types from './types';
import { auth } from '../firebase';

export const getData = () => {
	return{
		type : types.AUTH_USER
	};
};

export const getDataSuccess = (response) => {
	return{
		type : types.AUTH_USER_SUCCESS,
		response
	};
};

export const getDataFailure = (error) => {
	return{
		type : types.AUTH_USER_FAILURE,
		error
	};
};

// Firebase auth
export var getFetch = (email, password) => {

	return(dispatch) => {
		// execute actions
		dispatch(getData());

        auth.doSignInWithEmailAndPassword(email, password)
            .then((data) => {
                dispatch(getDataSuccess(data));
            })
            .catch(error => {
                dispatch(getDataFailure(error));
            });
	};
};