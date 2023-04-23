import axios from "axios";

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const api = axios.create({
    baseURL: API_BASE,
    withCredentials: true,
});

export const fetchOrganizerById = async (organizerId) => {
    const response = await api.get(`/organizers/${organizerId}`);
    return response.data;
};

export const fetchEventById = async (eventId) => {
    const response = await api.get(`/eventory/events/${eventId}`);
    return response.data;
};

export const updateEventById = async (eventId, updatedEvent) => {
    const response = await api.put(`/eventory/events/${eventId}`, updatedEvent);
    return response;
};

export const deleteEventById = async (eventId) => {
    const response = await api.delete(`/eventory/events/${eventId}`);
    return response;
};