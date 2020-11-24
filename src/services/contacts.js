import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
}

const create = (newContact) => {
    return axios
        .post(baseUrl, newContact)
        .then(response => response.data)
}

const remove = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, remove};