import * as types from '../actions/types';
import { objectLink, objectLinkMetadata, _newStore } from '../data/initialState';

var objectLinkInfo = _newStore(objectLink);
var objectLinkMetadataInfo = _newStore(objectLinkMetadata);


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

const newLinkReducer = (state = objectLinkInfo, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case types.CREATE_LINK:
            return newState;
        case types.CREATE_LINK_SUCCESS:
            return {
                ...newState,
                link: action.response
            };
        case types.CREATE_LINK_FAILURE:
            return {
                ...newState,
                error: action.error.message
            };
        default:
            return state;
	}
}

const metadataReducer = (state = objectLinkMetadataInfo, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case types.GET_METADATA_LINK:
            return newState;
        case types.GET_METADATA_LINK_SUCCESS:
            return {
                ...newState,
                metadata: action.response
            };
        case types.GET_METADATA_LINK_FAILURE:
            return {
                ...newState,
                error: action.error.message
            };
        default:
            return state;
	}
}

export {
    linksReducer,
    newLinkReducer,
    metadataReducer
};