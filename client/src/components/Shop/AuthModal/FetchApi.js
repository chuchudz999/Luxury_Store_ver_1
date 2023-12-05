import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const login = async ({ email, password }) => {
	try {
		const res = await axios.post(`${BASE_URL}/api/login`, { email, password });
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const register = async ({ fullName, userName, email, password }) => {
	try {
		const res = await axios.post(`${BASE_URL}/api/register`, { fullName, userName, email, password });
		return res;
	} catch (error) {
		console.log(error);
	}
};