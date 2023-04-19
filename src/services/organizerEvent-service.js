import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_EVENTORY_API_BASE,
    withCredentials: true,
});

export const fetchOrganizerById = async (organizerId) => {
    const response = await api.get(`/organizers/${organizerId}`);
    return response.data;
};

// export const fetchEventsByOrganizerId = async (organizerId) => {
//     const response = await api.get(`/organizers/${organizerId}`);
//     return response.data.events;
// };
