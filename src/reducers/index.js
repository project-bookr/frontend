import {
	LOADING_FETCHBOOKS,
	SUCCESS_FETCHBOOKS,
	ERROR_FETCH_BOOKS,
	LOADING_LOGIN,
	SUCCESS_LOGIN,
	ERROR_LOGIN,
	LOGOUT,
	LOADING_REGISTER,
	SUCCESS_REGISTER,
	ERROR_REGISTER,
} from "../actions";

const initialState = {
	books: [],
	fetchBooks: false,
	error: null,
	token: localStorage.getItem("token"),
	loggingIn: false,
	logout: false,
	registerinG: false,
	user: [],
	username: "",
	loggingOut: false,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING_REGISTER:
			return {
				...state,
				registerinG: true,
			};
		case SUCCESS_REGISTER:
			return {
				...state,
				registerinG: false,
				username: action.payload,
				token: action.payload,
			};
		case ERROR_REGISTER:
			return {
				...state,
				registerinG: false,
				error: action.payload,
			};
		case LOADING_LOGIN:
			return {
				...state,
				loggingIn: true,
			};
		case SUCCESS_LOGIN:
			return {
				...state,
				loggingIn: false,
				username: action.payload.username,
			};
		case ERROR_LOGIN:
			return {
				...state,
				logginIn: false,
				error: action.payload,
			};
		case LOGOUT:
			console.log(state.token);
			return {
				 ...state,
				logout: true,
				 token: localStorage.clear()
			};
		case LOADING_FETCHBOOKS:
			return {
				...state,
				fetchBooks: true,
			};
		case SUCCESS_FETCHBOOKS:
			return {
				...state,
				books: [...action.payload],
				fetchBooks: false,
			};
		case ERROR_FETCH_BOOKS:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
export default rootReducer;
