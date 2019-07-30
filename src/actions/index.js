import axios from "axios";
import {axiosWithAuth} from '../components/axiosWithAuth'
import jwtDecode from "jwt-decode";

export const LOADING_LOGIN = "LOADING_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";
export const LOGOUT="LOGOUT";
export const LOADING_FETCHBOOKS="LOADING_FETCHBOOKS";
export const SUCCESS_FETCHBOOKS = "SUCCESS_FETCHBOOKS";
export const ERROR_FETCH_BOOKS = "ERROR_FETCH_BOOKS";

export const LOADING_REGISTER="LOADING_REGISTER";
export const SUCCESS_REGISTER = "SUCCESS_REGISTER";
export const ERROR_REGISTER = "ERROR_REGISTER";

export const register = (state) => (dispatch) => {
	dispatch({type: LOADING_REGISTER});
	return axios
		.post("https://api-bookr.herokuapp.com/app/auth/register", state)
		.then((res) => {
			console.log("res=>", res);
			localStorage.setItem("token", res.data.user.token);
			dispatch({type: SUCCESS_REGISTER, payload: res.data.user.token});
		})
		.catch((error) => {
			console.log(error.response);
			dispatch({type:ERROR_REGISTER, payload: error.response});
		});
};

export const login = (state) => (dispatch) => {
	dispatch({type: LOADING_LOGIN});
	return axios
		.post(`https://api-bookr.herokuapp.com/api/auth/login/`, state)
		.then((res) => {
			const userInfo = jwtDecode(res.data.user.token);
			localStorage.setItem("token", res.data.user.token);
			dispatch({type: SUCCESS_LOGIN, payload: userInfo});
		})
		.catch((error) => {
			console.log(error.response);
			dispatch({
				type: ERROR_LOGIN,
				payload: error.response,
			});
		});
};
export const logout=() => {
	return {
		type: LOGOUT
	};
};
export const fetchbooks = () => (dispatch) => {
	dispatch({type: LOADING_FETCHBOOKS});
	return axiosWithAuth()
		.get(`https://api-bookr.herokuapp.com/api/books`)
		.then((res) => {
			console.log(res.data);
			dispatch({
				type: SUCCESS_FETCHBOOKS,
				payload: res.data.books,
			});
		})
		.catch((err) => {
			dispatch({
				type: ERROR_FETCH_BOOKS,
				payload: err.response,
			});
		});
};
