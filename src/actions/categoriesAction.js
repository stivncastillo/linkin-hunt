import * as types from './types';
import { firebase } from '../firebase';

// LOGOUT
export const getCategories = () => {
	return{
		type : types.GET_CATEGORIES
	};
};

export const getCategoriesSuccess = (response) => {
	return{
        type : types.GET_CATEGORIES_SUCCESS,
        response
	};
};

export const getCategoriesFailure = (error) => {
	return{
		type : types.GET_CATEGORIES_FAILURE,
		error
	};
};

export var getCategoriesFetch = () => {

	return(dispatch) => {
		dispatch(getCategories());

        let categoriesRef = firebase.database.ref('categories');

		categoriesRef.on('value',
			snapshot => {
				dispatch(getCategoriesSuccess(Object.values(snapshot.val())));
			},
			error => {
				dispatch(getCategoriesFailure(error));
			});
	};
};