import axios from 'axios';

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const SEARCH_API = `${API_BASE}/ticketmaster/events`;

export const findEventsInMa = async () => {
    const response = await axios.get(SEARCH_API);
    const results = response.data;
    return results;
};

export const findEventsByFilter = async (city, keyword) => {
    const response = await axios.get(`${SEARCH_API}/?city=${city}&keyword=${keyword}`);
    const results = response.data;
    return results;
};

export const getTicketmasterEventDetails = async (e_id) => {
    const response = await axios.get(`${SEARCH_API}/${e_id}`);
    const results = response.data;
    return results;
};
