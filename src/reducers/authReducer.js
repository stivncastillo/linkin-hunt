import * as types from '../actions/types';
import { objectUser, _newStore } from '../data/initialState';

var initialUserInfo = _newStore(objectUser);

const authReducer = (state = initialUserInfo, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case types.AUTH_USER:
            console.log(types.AUTH_USER);
            return newState;
        case types.AUTH_USER_SUCCESS:
            console.log(types.AUTH_USER_SUCCESS);
            return {
                ...newState,
                user: action.response,
                isLogged: true
            };
        default:
            return state;
	}
};

export {
	authReducer
};