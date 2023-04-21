import axios from 'axios';

const API_BASE = 'http://localhost:4000/api';
const USERS_API = `${API_BASE}/users`;
const api = axios.create({ withCredentials: true });

// export const findUserById = async (userId) => {
//     try {
//         const response = await api.get(`${USERS_API}/${userId}`);
//         return response.data;
//     } catch (error) {
//         console.error('Failed to get user: ', error.message);
//         throw error;
//     }
// };

export const updateUser = async (userId, updates) => {
    const response = await api.put(`${USERS_API}/${userId}`, updates);
    console.log('=========== response ===============');
    console.log('response data: ' + JSON.stringify(response));
    return response.data;
};

export const resetUserPassword = async (oldPassword, newPassword) => {
    const response = await api.put(`${USERS_API}/user/resetpassword`, {
        oldPassword,
        newPassword,
    });
    return response.data;
};

export const likeOrDislikeEventoryEvent = async (eventId, action) => {
    const response = await api.put(`${USERS_API}/eventory/${eventId}`, {
        action: action,
    });
    console.log('======== like or dislike eventory =======');
    console.log('response data: ' + JSON.stringify(response));
    return response.data;
};

export const likeOrDislikeTicketmasterEvent = async (eventId, action) => {
    const response = await api.put(`${USERS_API}/ticketmaster/${eventId}`, {
        action: action,
    });
    console.log('======== like or dislike ticketmaster =======');
    console.log('response data: ' + JSON.stringify(response));
    return response.data;
};
