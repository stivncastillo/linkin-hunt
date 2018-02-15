const MainState = (state = [
    {
        title: "El puto amo",
        description: "Hola linda como estas"
    }
], action) => {
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