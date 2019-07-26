import {
    LOADING_FETCHBOOKS,
    SUCCESS_FETCHBOOKS,
    ERROR_FETCH_BOOKS,
    LOADING_LOGIN,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
} from "../actions";



const initialState = {
	books: [],
	fetchBooks: false,
    error: null,
    token: localStorage.getItem( 'token' ),
    loggingIn: false,
    user: [],
    username:'',
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
        case LOADING_LOGIN:
            return {
                ...state,
                loggingIn: true
            };
        case SUCCESS_LOGIN:
            return {
                ...state,
                logginIn: false,
                username:action.payload.username
            };
        case ERROR_LOGIN:
            return {
                ...state,
                logginIn: false,
                error: action.payload
            };
        case
            LOADING_FETCHBOOKS:
			return {
				...state,
				fetchBooks: true,
			};
        case
            SUCCESS_FETCHBOOKS:
			return {
				...state,
				books: [...action.payload],
				fetchBooks: false,
			};
        case
            ERROR_FETCH_BOOKS:
            return {
                ...state,
                error: action.payload
            };
		default:
			return state;
	}
};
export default rootReducer;
