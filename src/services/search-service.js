import axios from 'axios';

const API_BASE = process.env.BASE_URL;
const SEARCH_API = "http://localhost:4000/api/ticketmaster/events"
export const findEventsInMa = async () => {
    const response = await axios.get(SEARCH_API);
    const results = response.data;
    return results;
}