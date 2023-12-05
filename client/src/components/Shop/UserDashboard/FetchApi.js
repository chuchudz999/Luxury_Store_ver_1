import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const getSingleUser = async (id) => {
	try {
		const res = await axios.get(`${BASE_URL}/api/user/get-single-user/${id}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getOrderByUser = async (id) => {
	try {
		const res = await axios.get(`${BASE_URL}/api/order/order-by-user/${id}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const patchEditUser = async (formData) => {
	try {
		const res = await axios.patch(`${BASE_URL}/api/user/edit-user/${formData.id}`, formData);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const changePassword = async (formData) => {
	try {
		const res = await axios.post(`${BASE_URL}/api/user/change-password`, formData);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const postAddToWish = async () => {
	const wishProduct = localStorage.getItem('wishList') ? JSON.parse(localStorage.getItem('wishList')) : [];

	try {
		const res = await axios.post(`${BASE_URL}/api/product/add-wish`, { wishProduct });
		return res;
	} catch (error) {
		console.log(error);
	}
};
