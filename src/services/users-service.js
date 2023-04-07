import axios from 'axios';

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const USERS_API = `${API_BASE}/users`;

export const userSignUp = async (user) => {
    const response = await axios.post(USERS_API, user);
    return response.data;
};

// export const userSignIn = async (user) => {
//     const response = await axios.
// }
// export const deleteTuit = async (tid) => {
//     const response = await axios
//         .delete(`${TUITS_API}/${tid}`)
//     return response.data
// }
// export const updateTuit = async (tuit) => {
//     const response = await axios
//         .put(`${TUITS_API}/${tuit._id}`, tuit);
//     return tuit;
// }