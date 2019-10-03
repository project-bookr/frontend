[1mdiff --git a/src/actions/index.js b/src/actions/index.js[m
[1mindex aa8add5..eb9b03f 100644[m
[1m--- a/src/actions/index.js[m
[1m+++ b/src/actions/index.js[m
[36m@@ -55,16 +55,16 @@[m [mexport const logout=() => {[m
 	};[m
 };[m
 [m
[31m-export const addFavorite=(id)=> {[m
[32m+[m[32mexport const addFavorite=(book)=> {[m
 	return {[m
 		type: ADDFAV,[m
[31m-		payload:id[m
[32m+[m		[32mpayload:book.id[m
 	};[m
 };[m
[31m-export const removeFavorite=( id ) => {[m
[32m+[m[32mexport const removeFavorite=(book ) => {[m
 	return {[m
 		type: REMOVEFAV,[m
[31m-		payload: id[m
[32m+[m		[32mpayload: book.id[m
 	};[m
 }[m
 export const fetchbooks = () => (dispatch) => {[m
[1mdiff --git a/src/components/App/App.js b/src/components/App/App.js[m
[1mindex 3392f7f..35f0d6f 100644[m
[1m--- a/src/components/App/App.js[m
[1m+++ b/src/components/App/App.js[m
[36m@@ -1,29 +1,49 @@[m
 import React from "react";[m
[31m-import {BrowserRouter as Router, Route} from "react-router-dom";[m
[32m+[m[32mimport {connect} from "react-redux"[m
[32m+[m[32mimport {BrowserRouter , Route} from "react-router-dom";[m
 import Login from "../Login/Login.js";[m
 import PrivateRoute from "../PrivateRoute/PrivateRoute.js";[m
 import Register from "../Register/Register.js";[m
 import Dashboard from "../Dashboard/Dashboard.js";[m
 import MarketingPage from "../MarketingPage/MarketingPage";[m
 import Nav from "../Nav/Nav";[m
[31m-import Library from "../Library/Library";[m
[32m+[m[32mimport Book from "../Book/Book"[m
[32m+[m[32mimport FavoriteBooks from "../FavoriteBooks/FavoriteBooks";[m
 import "./App.css"[m
 const App = () => {[m
 	return ([m
[31m-		<Router>[m
[32m+[m		[32m<BrowserRouter>[m
 			<div className="App">[m
 				<div>[m
 					<Nav />[m
 				</div>[m
[31m-[m
[32m+[m				[32m<Route path="/FavoriteBooks/:id" 	render={(props) => ([m
[32m+[m					[32m<Book {...props}  />[m
[32m+[m				[32m)}[m
[32m+[m			[32m/>[m[41m [m
 				<Route exact path="/register" component={Register} />[m
 				<Route exact path="/" component={MarketingPage} />[m
 				<PrivateRoute exact path="/dashboard" component={Dashboard} />[m
[31m-				<PrivateRoute exact path="/library" component={Library}/>[m
[32m+[m				[32m<PrivateRoute[m
[32m+[m						[32mto="/FavoriteBooks"[m
[32m+[m						[32mcomponent={FavoriteBooks}[m
[32m+[m[41m						[m
[32m+[m					[32m/>[m
 				<Route exact path="/login" component={Login} />[m
 			</div>[m
[31m-		</Router>[m
[32m+[m		[32m</BrowserRouter>[m
 	);[m
 };[m
 [m
[31m-export default App;[m
[32m+[m
[32m+[m[32mconst mapStateToProps = (state) => {[m
[32m+[m	[32mreturn {[m
[32m+[m		[32mbooks: state.books,[m
[32m+[m		[32mfavoriteBooks:state.favoriteBooks,[m
[32m+[m	[32m};[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default connect([m
[32m+[m	[32mmapStateToProps,[m
[32m+[m	[32m{ }[m
[32m+[m[32m)(App);[m
[1mdiff --git a/src/components/Dashboard/Dashboard.js b/src/components/Dashboard/Dashboard.js[m
[1mindex 1b50452..1f1b9f2 100644[m
[1m--- a/src/components/Dashboard/Dashboard.js[m
[1m+++ b/src/components/Dashboard/Dashboard.js[m
[36m@@ -1,10 +1,9 @@[m
 import React, {Component} from "react";[m
 import {connect} from "react-redux";[m
 import {Link} from "react-router-dom";[m
[31m-import PrivateRoute from "../PrivateRoute/PrivateRoute.js";[m
[32m+[m
 import {fetchbooks, addFavorite, removeFavorite} from "../../actions/index";[m
 [m
[31m-import Library from "../Library/Library.js";[m
 [m
 class Dashboard extends Component {[m
 	state;[m
[36m@@ -20,33 +19,28 @@[m [mclass Dashboard extends Component {[m
 	}[m
 	render() {[m
 		return ([m
[31m-			<div>[m
[31m-				<div>[m
[31m-					<Link to="/library">My Library</Link>[m
[31m-					<PrivateRoute[m
[31m-						to="/library"[m
[31m-						component={Library}[m
[31m-						books={this.props.books}[m
[31m-					/>[m
[31m-				</div>[m
[31m-				{this.props.books.map((book) => {[m
[31m-					return ([m
[31m-						<div key={book.id}>[m
[31m-							<h6>{book.publisher}</h6>[m
[31m-							<img src={book.cover} alt={book.title} />[m
[31m-							<h2>{book.title}</h2>[m
[31m-							<button onClick={() => this.addFav(book.id)}>[m
[31m-								addFav[m
[32m+[m			[32m<div   >[m
[32m+[m				[32m<Link to="/FavoriteBooks">My Favorites</Link>[m
[32m+[m			[32m<div className="container">[m
[32m+[m[41m					[m
[32m+[m					[32m{this.props.books.map((book) => {[m
[32m+[m						[32mreturn ([m
[32m+[m							[32m<div className="card">< Link to={`/FavoriteBooks/${book.title}`} key={book.id}>[m
[32m+[m							[32m<img src={book.thumbnail} alt={book.title}/>[m
[32m+[m							[32m</ Link>[m
[32m+[m							[32m<button onClick={() => this.addFav(book)}>[m
[32m+[m							[32maddFav[m
 							</button>[m
 							<button[m
[31m-								onClick={() =>[m
[31m-									this.props.removeFavorite(book.id)[m
[31m-								}>[m
[31m-								removeFav[m
[32m+[m							[32monClick={() =>[m
[32m+[m								[32mthis.remFav(book)[m
[32m+[m							[32m}>[m
[32m+[m							[32mremoveFav[m
 							</button>[m
[32m+[m							[32m</div>[m
[32m+[m							[32m);[m
[32m+[m						[32m})}[m
 						</div>[m
[31m-					);[m
[31m-				})}[m
 			</div>[m
 		);[m
 	}[m
[1mdiff --git a/src/components/FavoriteBooks/FavoriteBooks.js b/src/components/FavoriteBooks/FavoriteBooks.js[m
[1mindex 1e5eb33..dd948de 100644[m
[1m--- a/src/components/FavoriteBooks/FavoriteBooks.js[m
[1m+++ b/src/components/FavoriteBooks/FavoriteBooks.js[m
[36m@@ -2,29 +2,30 @@[m [mimport React from "react";[m
 import {removeFavorite} from "../../actions"[m
 import {connect} from "react-redux";[m
 [m
[31m-const Favorites=( {favoritebooks} ) => {[m
[31m-    return ([m
[31m-        <div>[m
[31m-        {favoritebooks.map( ( book )=>{[m
[32m+[m[32mconst FavoriteBooks=( {favoriteBooks} ) => {[m
[32m+[m[32m    return ([m[41m [m
[32m+[m[32m        <div className="container">[m
[32m+[m[32m        {console.log( favoriteBooks )}[m
[32m+[m[32m        {favoriteBooks.map( ( book )=>{[m
             return ([m
[31m-                <div >[m
[32m+[m[32m                <div key={book.isbn} >[m
                     {book.title}[m
[31m-                    <img src={book.thumbnail} alt={book.title} />[m
[31m-                    <button onClick={() => this.remFav( book.id )}>remove</button>[m
[32m+[m[32m                    <img src={book.cover} alt={book.title} />[m
[32m+[m[32m                    <button onClick={() => this.remFav( book)}>remove</button>[m
                 </div>[m
             )[m
         })}[m
         </div>[m
     )[m
 }[m
[31m-const mapStateToProps = (state) => {[m
[32m+[m[32mconst mapStateToProps = ({favoriteBooks}) => {[m
 	return {[m
[31m-		books: state.books,[m
[31m-		favoriteBooks:state.favoriteBooks,[m
[32m+[m[41m		[m
[32m+[m		[32mfavoriteBooks,[m
 	};[m
 };[m
 [m
 export default connect([m
 	mapStateToProps,[m
 	{ removeFavorite}[m
[31m-)(Dashboard);[m
[32m+[m[32m)(FavoriteBooks);[m
[1mdiff --git a/src/components/Library/Library.js b/src/components/Library/Library.js[m
[1mdeleted file mode 100644[m
[1mindex ccbc216..0000000[m
[1m--- a/src/components/Library/Library.js[m
[1m+++ /dev/null[m
[36m@@ -1,31 +0,0 @@[m
[31m-import React from "react";[m
[31m-import {connect} from "react-redux";[m
[31m-[m
[31m-const Library = ({books}) => {[m
[31m-	return ([m
[31m-		<div className="container">[m
[31m-			{books.map((book) => {[m
[31m-				return ([m
[31m-[m
[31m-					<div className="card">[m
[31m-						<div>[m
[31m-							<img src={book.thumbnail} alt={book.title} />[m
[31m-						</div>[m
[31m-						<h3>{book.title}</h3>[m
[31m-						<h4>{book.publisher}</h4>[m
[31m-					</div>[m
[31m-				);[m
[31m-			})}[m
[31m-		</div>[m
[31m-	);[m
[31m-};[m
[31m-[m
[31m-const mapStateToProps = (state) => {[m
[31m-	return {[m
[31m-		books: state.books,[m
[31m-	};[m
[31m-};[m
[31m-export default connect([m
[31m-	mapStateToProps,[m
[31m-	{}[m
[31m-)(Library);[m
[1mdiff --git a/src/reducers/index.js b/src/reducers/index.js[m
[1mindex 9324ed0..480e24f 100644[m
[1m--- a/src/reducers/index.js[m
[1m+++ b/src/reducers/index.js[m
[36m@@ -12,6 +12,9 @@[m [mimport {[m
 	ADDFAV,[m
 	REMOVEFAV,[m
 } from "../actions";[m
[32m+[m[32mimport FavoriteBooks from "../components/FavoriteBooks/FavoriteBooks";[m
[32m+[m
[32m+[m
 [m
 const initialState = {[m
 	books: [],[m
[36m@@ -24,11 +27,11 @@[m [mconst initialState = {[m
 	user: [],[m
 	username: "",[m
 	loggingOut: false,[m
[31m-	favoriteBooks: [],[m
[32m+[m	[32mfavoriteBooks:[],[m
 };[m
 [m
 const rootReducer = (state = initialState, action) => {[m
[31m-	switch (action.type) {[m
[32m+[m	[32mswitch( action.type ) {[m
 		case LOADING_REGISTER:[m
 			return {[m
 				...state,[m
[36m@@ -65,7 +68,7 @@[m [mconst rootReducer = (state = initialState, action) => {[m
 				error: action.payload,[m
 			};[m
 		case LOGOUT:[m
[31m-			console.log(state.token);[m
[32m+[m			[32mconsole.log( state.token );[m
 			return {[m
 				...state,[m
 				logout: true,[m
[36m@@ -79,7 +82,7 @@[m [mconst rootReducer = (state = initialState, action) => {[m
 		case SUCCESS_FETCHBOOKS:[m
 			return {[m
 				...state,[m
[31m-				books: [...action.payload],[m
[32m+[m				[32mbooks: [state.books, ...action.payload],[m
 				fetchBooks: false,[m
 			};[m
 		case ERROR_FETCH_BOOKS:[m
[36m@@ -88,20 +91,24 @@[m [mconst rootReducer = (state = initialState, action) => {[m
 				error: action.payload,[m
 			};[m
 		case ADDFAV:[m
[31m-			const fav = state.books.filter([m
[31m-				(book) => book.id === action.payload[m
[31m-			);[m
[32m+[m[41m			[m
[32m+[m[41m			[m
 			return {[m
 				...state,[m
[31m-[m
[31m-				favoriteBooks: [...fav],[m
[32m+[m[41m				[m
[32m+[m				[32mfavoriteBooks: [...state.favoriteBooks,[m
[32m+[m				[32mstate.books.filter([m
[32m+[m					[32m( book ) => book.id===action.payload[m
[32m+[m						[32m),[m
[32m+[m					[32m],[m
[32m+[m[41m					[m
 			};[m
 		case REMOVEFAV:[m
 			return {[m
 				...state,[m
[31m-				favoriteBooks: [[m
[31m-					...state.favoriteBooks.filter([m
[31m-						(books) => books.id !== action.payload[m
[32m+[m				[32mfavoriteBooks: [...state.favoriteBooks,[m
[32m+[m					[32mstate.favoriteBooks.filter([m
[32m+[m						[32m(book) => book.id !== action.payload[m
 					),[m
 				],[m
 			};[m
