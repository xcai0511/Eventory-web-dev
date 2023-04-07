import axios from 'axios';

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const USERS_API = `${API_BASE}/users`;

export const userSignUp = async (user) => {
    const response = await axios.post(USERS_API, user);
    return response;
};

export const userSignIn = async (user) => {
    const response = await axios.post(USERS_API + '/login', user);
    return response;
}