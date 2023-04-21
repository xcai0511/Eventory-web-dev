import axios from "axios";

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const USERS_API = `${API_BASE}/users`;
console.log("USERS_API " + USERS_API);
const api = axios.create({
    baseURL: USERS_API,
    withCredentials: true });

export const getAllUsers = async () => {
    const response = await api.get();
    return response;
};

export const deleteUserById = async (userId) => {
    const response = await api.delete(`${USERS_API}/${userId}`);
    return response;
}