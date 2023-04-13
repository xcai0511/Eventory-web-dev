import axios from 'axios';

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const USERS_API = `${API_BASE}/users`;
const api = axios.create({ withCredentials: true });

export const userSignUp = async (user) => {
    const response = await axios.post(USERS_API, user);
    return response;
};

export const everybodySignIn = async (user) => {
    const response = await api.post(`${API_BASE}/login`, user);
    return response;
};

export const everybodyLogOut = async () => {
    const response = await api.post(`${API_BASE}/logout`);
    return response;
};

export const currentUserProfile = async () => {
    const response = await api.get(`${API_BASE}/profile`);
    return response;
};