import axios from "axios";

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const ORGANIZERS_API = `${API_BASE}/organizers`;
console.log("ORGANIZERS_API " + ORGANIZERS_API);
const api = axios.create({
    baseURL: ORGANIZERS_API,
    withCredentials: true });

export const getAllOrganizers = async () => {
    const response = await api.get();
    return response;
};

export const deleteOrganizerById = async (organizerId) => {
    const response = await api.delete(`${ORGANIZERS_API}/${organizerId}`);
    return response;
};