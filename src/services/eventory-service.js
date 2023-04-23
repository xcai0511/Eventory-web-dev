import axios from 'axios';

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const SEARCH_API = `${API_BASE}/eventory/events`;

export const findAllEvents = async () => {
    const response = await axios.get(SEARCH_API);
    const results = response.data;
    return results;
};

export const findEvents = async (location, keyword) => {
    const response = await axios.get(`${SEARCH_API}?city=${location}&keyword=${keyword}`);
    const results = response.data;
    return results;
};

export const findEventById = async (eventId) => {
    const response = await axios.get(`${SEARCH_API}/${eventId}`);
    const results = response.data;
    return results;
};
