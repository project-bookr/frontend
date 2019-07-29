import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Dashboard from "./Dashboard/Dashboard"
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
