const MainState = (state = [], action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'LOAD_DATA':
            return newState;
        default:
            return state;
	}
};

export{
	MainState
};