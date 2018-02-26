import * as types from '../actions/types';

const initialState = [
        {
            title: "El puto amo",
            description: "Hola linda como estas",
            url: 'https://github.com'
        },
        {
            title: "La puta mentira",
            description: "Hola linda como estas",
            url: 'https://github.com'
        }
    ];

const linksReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case types.LINKS_LOAD_DATA:
            return newState;
        default:
            return state;
	}
};

export {
	linksReducer
};