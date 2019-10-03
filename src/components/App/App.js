import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "../Login/Login.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import Register from "../Register/Register.js";
import Dashboard from "../Dashboard/Dashboard.js";
import MarketingPage from "../MarketingPage/MarketingPage";
import Nav from "../Nav/Nav";
import Book from "../Book/Book";
import SingleBook from '../Book/SingleBook'
import "./App.css"
import FavoriteBooks from "../FavoriteBooks/FavoriteBooks.js";
const App = () => {
	return (
		<Router>
			<div className="App">
				<div>
					<Nav />
				</div>

				<Route exact path="/" component={MarketingPage} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute exact path="/favoritebooks" component={FavoriteBooks}/>
				<PrivateRoute exact path="/favoritebooks/:book.id" component={Book}/>
			</div>
		</Router>
	);
};

export default App;
