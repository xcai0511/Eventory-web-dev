import axios from "axios";
import { currentUserProfile } from "./auth-service";

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const api = axios.create({
    baseURL: API_BASE,
    withCredentials: true,
});

export const createEvent = async (event) => {
    const currentUser = await currentUserProfile();
    const eventData = { ...event, organizer: currentUser.data._id };
    const response = await api.post("/eventory/events", eventData);
    return response.data;
};