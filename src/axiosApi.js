import axios from 'axios';
import { APIURL } from './config.js';

const axiosInstance = axios.create({
	baseURL: APIURL,
	timeout: 5000,
	headers: {
		Authorization: 'JWT ' + localStorage.getItem('access_token'),
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

export default axiosInstance;