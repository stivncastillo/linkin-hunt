const objectUser = {
    user: null,
    isLogged: false
};

const objectCategories ={
    categories: []
};

const _newStore = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

export {
    objectUser,
    objectCategories,

    _newStore
}