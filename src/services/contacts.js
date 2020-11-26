import axios from 'axios';
const baseUrl = '/api/persons';

const getAll = () => {
	return axios.get(baseUrl)
		.then(response => response.data)
		.catch(error => {
			throw error.response.data;
		});
};

const create = (newContact) => {
	return axios
		.post(baseUrl, newContact)
		.then(response => response.data)
		.catch(error => {
			throw error.response.data;
		});
};

const remove = (id) => {
	return axios
		.delete(`${baseUrl}/${id}`)
		.catch(error => {
			throw error.response.data;
		});
};

const update = (id, newContact) => {
	return axios
		.put(`${baseUrl}/${id}`, newContact)
		.then(response => response.data)
		.catch(error => {
			throw error.response.data;
		});
};

export default {getAll, create, remove, update};