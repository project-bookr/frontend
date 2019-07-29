import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard"
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
