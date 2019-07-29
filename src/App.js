import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.js";
import Login from "./Components/Login/Login.js";
import Register from "./Components/Register/Register.js";
import Dashboard from "./Components/Dashboard/Dashboard.js"
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/register" component={Register} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<Route exact path="/login" component={Login} />
			
			</div>
		</Router>
	);
}

export default App;
