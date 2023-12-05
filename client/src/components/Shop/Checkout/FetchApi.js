import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const getBraintreeToken = async () => {
	let uId = JSON.parse(localStorage.getItem("auth")).user._id;
	try {
		const res = await axios.get(`${BASE_URL}/api/braintree/get-token`, {
			uId: uId,
		});
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getPaymentProcess = async (paymentdata) => {
	try {
		const res = await axios.post(`${BASE_URL}/api/braintree/payment`, paymentdata);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const createOrder = async (orderData) => {
	try {
		const res = await axios.post(`${BASE_URL}/api/order/create-order`, orderData);
		return res;
	} catch (error) {
		console.log(error);
	}
};
