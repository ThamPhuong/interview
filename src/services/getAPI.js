import axios from "axios"

// Make a request for a user with a given ID
export const getAPI = (url, params) => {
	return axios.get(url, {
		params
	})
		.then((response) => {
			// handle success
			return response;
		})
		.catch((error) => {
			// handle error
			console.log(error);
		});
}