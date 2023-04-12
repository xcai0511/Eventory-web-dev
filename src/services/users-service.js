import axios from 'axios';

const API_BASE = process.env.REACT_APP_EVENTORY_API_BASE;
const USERS_API = `${API_BASE}/users`;
console.log(USERS_API);

export const userSignUp = async (user) => {
    console.log("service");
    const response = await axios.post(USERS_API, user);
    console.log(response);
    return response;
};

export const everybodySignIn = async (user) => {
    const response = await axios.post(API_BASE + '/login', user);
    return response;
}