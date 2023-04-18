import axios from 'axios';

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const USERS_API = `${API_BASE}/users`;
const api = axios.create({ withCredentials: true });

// add a new service to update user information
export const updateUser = async (userId, updatedUser) => {
    const response = await api.put(`${USERS_API}/${userId}`, updatedUser);
    return response.data;
};
