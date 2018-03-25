const objectUser = {
    user: null,
    isLogged: false
};

const objectCategories ={
    categories: []
};

const objectLink = {
    title: null,
    description: null,
    tags: [],
    category: null
};

const objectLinkMetadata = {
    result: {
        status: null
    },
    meta: null
};

const _newStore = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

export {
    objectUser,
    objectCategories,
    objectLink,
    objectLinkMetadata,

    _newStore
}