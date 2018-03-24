import * as types from '../actions/types';
import { objectCategories, _newStore } from '../data/initialState';

var objectCategoriesInfo = _newStore(objectCategories);

const categoriesReducer = (state = objectCategoriesInfo, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case types.GET_CATEGORIES:
            return newState;
        case types.GET_CATEGORIES_SUCCESS:
            return {
                ...newState,
                categories: action.response
            };
        case types.GET_CATEGORIES_FAILURE:
            return {
                ...newState,
                error: action.error.message
            };
        default:
            return state;
	}
};

export {
    categoriesReducer
};