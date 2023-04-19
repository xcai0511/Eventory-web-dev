import axios from 'axios';

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const USERS_API = `${API_BASE}/users`;
const api = axios.create({ withCredentials: true });

// export const findUserById = async (userId) => {
//     try {
//         const response = await api.put(`${USERS_API}/${userId}`);
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
    console.log('=========== response ===============');
    console.log('response data: ' + JSON.stringify(response));

    return response.data;
};
