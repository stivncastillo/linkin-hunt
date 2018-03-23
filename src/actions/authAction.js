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

export const getRegister = () => {
	return{
		type : types.REGISTER_USER
	};
};

export const getRegisterSuccess = (response) => {
	return{
		type : types.REGISTER_USER_SUCCESS,
		response
	};
};

export const getRegisterFailure = (error) => {
	return{
		type : types.REGISTER_USER_FAILURE,
		error
	};
};

// Firebase auth
export var getRegisterFetch = (email, password) => {

	return(dispatch) => {
		dispatch(getRegister());

		auth.doCreateUserWithEmailAndPassword(email, password)
			.then(data => {
				dispatch(getRegisterSuccess(data));
			})
			.catch(error => {
                dispatch(getRegisterFailure(error));
			});
	};
};