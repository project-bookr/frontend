import axios from "axios";
import jwtDecode from 'jwt-decode';


export const LOADING_LOGIN="LOADING_LOGIN";
export const SUCCESS_LOGIN="SUCCESS_LOGIN";
export const ERROR_LOGIN="ERROR_LOGIN";
export const LOADING_FETCHBOOKS = "LOADING_FETCHBOOKS";
export const SUCCESS_FETCHBOOKS = "SUCCESS_FETCHBOOKS";
export const ERROR_FETCH_BOOKS = "ERROR_FETCH_BOOKS";


export const login=(state) => dispatch => {
  dispatch( {type: LOADING_LOGIN} );
  return axios.post( `https://api-bookr.herokuapp.com/api/auth/login/`, state )
    .then( res => {
      const userInfo=jwtDecode( res.data.user.token );
      localStorage.setItem( 'token', res.data.usre.token );
      dispatch( {type: SUCCESS_LOGIN, payload: userInfo} );
    } )
    .catch( error => {
      console.log( error.response );
      dispatch( {
        type: ERROR_LOGIN,
        payload: error.response
      } );
    } )
}



export const fetchbooks=()=> dispatch => {
		dispatch({type: LOADING_FETCHBOOKS});
	return 	axios
      .get( `https://api-bookr.herokuapp.com/api/books` )
      .then( ( res ) => {
        console.log(res.data)
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
