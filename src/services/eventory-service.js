import axios from 'axios';

const API_BASE = process.env.BASE_URL;
const SEARCH_API = "http://localhost:4000/api/eventory/events"
export const findAllEvents = async () => {
    const response = await axios.get(SEARCH_API);
    const results = response.data;
    return results;
}
export const findEvents = async (location, keyword) => {
    const response = await axios.get(`${SEARCH_API}?city=${location}&keyword=${keyword}`);
    const results = response.data;
    return results;
}

export const findEventById = async (eventId) => {
    const response = await axios.get(`${SEARCH_API}/${eventId}`);
    const results = response.data;
    return results;
}