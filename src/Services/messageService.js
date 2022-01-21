import axios from 'axios';
const baseURL = 'http://localhost:3001/messages';

// desc: get all messages
const getAll = () => {
    return axios.get(baseURL);
}

// desc: create new message
const create = (messageObject) => {
    return axios.post(baseURL, messageObject);
}

export default { getAll, create };