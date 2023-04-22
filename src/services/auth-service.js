import axios from 'axios';

const API_BASE = 'http://localhost:4000/api';
const USERS_API = `${API_BASE}/users`;
const ORGANIZERS_API = `${API_BASE}/organizers`;

const api = axios.create({ withCredentials: true });

export const userSignUp = async (user) => {
    const response = await axios.post(USERS_API, user);
    return response;
};

export const organizerSignUp = async (organizer) => {
    const response = await axios.post(ORGANIZERS_API, organizer);
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

