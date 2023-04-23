import axios from "axios";

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const ORGANIZERS_API = `${API_BASE}/organizers`;

const api = axios.create({
    baseURL: ORGANIZERS_API,
    withCredentials: true });

export const updateOrganizerByOrganizerId = async (organizerId, updatedOrganizer) => {
    const response = await api.put(`/${organizerId}`, updatedOrganizer);
    return response;
};