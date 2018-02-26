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

// const Robo1 = (state = initialRobo.page1, action) => {
// 	switch(action.type){
// 	case 'robo1_selected_btn':
// 		initialRobo.page1[action.id] = action.color;
// 		return initialRobo.page1.map((value) => value);

// 	case 'robo_reset':
// 		return _newStore(objectRobo.page1);

// 	default:
// 		return state;
// 	}
// };

export {
	linksReducer
};