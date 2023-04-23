import axios from "axios";

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const USERS_API = `${API_BASE}/users`;
const ORGANIZERS_API = `${API_BASE}/organizers`;

export const findUserById = async (userId) => {
    const response = await axios.get(`${USERS_API}/${userId}`);
    return response;
}

export const findOrganizerById = async (organizerId) => {
    const response = await axios.get(`${ORGANIZERS_API}/${organizerId}`);
    return response;
};