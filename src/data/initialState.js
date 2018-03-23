const objectUser = {
    user: null,
    isLogged: false
};

const _newStore = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

export {
    objectUser,

    _newStore
}