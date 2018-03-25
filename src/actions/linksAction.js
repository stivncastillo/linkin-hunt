import * as types from './types';
import { firebase } from '../firebase';
import DataFetch from '../utils/fetch';

export var getData = () => {
	return{
		type : types.LINKS_LOAD_DATA
	};
};

// Get metadata from url
export const getMetaData = () => {
	return{
		type : types.GET_METADATA_LINK
	};
};

export const getMetaDataSuccess = (response) => {
	return{
		type : types.GET_METADATA_LINK_SUCCESS,
		response
	};
};

export const getMetaDataFailure = (error) => {
	return{
		type : types.GET_METADATA_LINK_FAILURE,
		error
	};
};

export var getMetaDataFetch = (body, urlApi, method) => {
	return(dispatch) => {
		dispatch(getMetaData());

		DataFetch(body, urlApi, method)
			.then(([response, json]) => {
				dispatch(getMetaDataSuccess(json));
			})
			.catch((err) => {
				dispatch(getMetaDataFailure(err));
			});
	};
};

// Save link
export const postData = () => {
	return{
		type : types.CREATE_LINK
	};
};

export const postDataSuccess = (response) => {
	return{
		type : types.CREATE_LINK_SUCCESS,
		response
	};
};

export const postDataFailure = (error) => {
	return{
		type : types.CREATE_LINK_FAILURE,
		error
	};
};

export var postFetch = () => {
	return(dispatch) => {
		dispatch(postData());
	};
};