import axios from 'axios';

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const USERS_API = `${API_BASE}/users`;
const api = axios.create({ withCredentials: true });

export const updateUser = async (userId, updates) => {
    const response = await api.put(`${USERS_API}/${userId}`, updates);
    return response.data;
};

export const resetUserPassword = async (oldPassword, newPassword) => {
    const response = await api.put(`${USERS_API}/user/resetpassword`, {
        oldPassword,
        newPassword,
    });
    return response.data;
};

export const likeOrDislikeEventoryEvent = async (eventId, action) => {
    const response = await api.put(`${USERS_API}/eventory/${eventId}`, {
        action: action,
    });
    return response.data;
};

export const likeOrDislikeTicketmasterEvent = async (eventId, action) => {
    const response = await api.put(`${USERS_API}/ticketmaster/${eventId}`, {
        action: action,
    });
    return response.data;
};
