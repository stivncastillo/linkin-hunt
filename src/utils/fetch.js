import { URL_META } from '../constants/apis';

export default (body, api, method) => {
	var objFetch = {};
	const headers = {
		// 'Accept': 'application/json',
		// 'Content-Type': 'application/json'
	};

	if(method === 'GET'){
        objFetch = { method, headers };
    } else {
        objFetch = { method, headers, body };
    }

	return fetch(`${URL_META}/${api}`, objFetch)
        .then(response => Promise.all([response, response.json()]));
};