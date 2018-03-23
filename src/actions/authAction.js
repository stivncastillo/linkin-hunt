import * as types from './types';
import { auth } from '../firebase';

// AUTH
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

// REGISTER
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

// LOGOUT
export const getLogout = () => {
	return{
		type : types.LOGOUT_USER
	};
};

export const getLogoutSuccess = () => {
	return{
		type : types.LOGOUT_USER_SUCCESS
	};
};

export const getLogoutFailure = (error) => {
	return{
		type : types.LOGOUT_USER_FAILURE,
		error
	};
};

export var getLogoutFetch = () => {

	return(dispatch) => {
		dispatch(getLogout());

		auth.doSignOut()
			.then(() => {
				dispatch(getLogoutSuccess());
			})
			.catch(error => {
                dispatch(getLogoutFailure(error));
			});
	};
};