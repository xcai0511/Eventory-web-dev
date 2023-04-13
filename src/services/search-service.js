import axios from 'axios';

const API_BASE = process.env.BASE_URL;
console.log(API_BASE);
const SEARCH_API = `http://localhost:4000/api/ticketmaster/events`;
export const findEventsInMa = async () => {
    const response = await axios.get(SEARCH_API);
    const results = response.data;
    return results;
}
export const findEventsByFilter = async (city, keyword) => {
    const response = await axios.get(`${SEARCH_API}/?city=${city}&keyword=${keyword}`);
    const results = response.data;
    return results;
}