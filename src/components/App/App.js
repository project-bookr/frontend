import React from "react";
import {BrowserRouter as Router, Route, } from "react-router-dom";
import Login from "../Login/Login.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js"
import Register from "../Register/Register.js";
import Dashboard from "../Dashboard/Dashboard.js";
import MarketingPage from "../MarketingPage/MarketingPage"

const App=()=> {
	return (
		<Router>
			<div className="App">
				<Route exact path="/register" component={Register} />
				<Route exact path="/" component={MarketingPage}/>
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<Route exact path="/login" component={Login} />
			
			</div>
		</Router>
	);
}

export default App;
