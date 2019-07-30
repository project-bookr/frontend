import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "../Login/Login.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import Register from "../Register/Register.js";
import Dashboard from "../Dashboard/Dashboard.js";
import MarketingPage from "../MarketingPage/MarketingPage";
import Nav from "../Nav/Nav";
import Library from "../Library/Library";

const App = () => {
	return (
		<Router>
			<div className="App">
				<div>
					<Nav />
				</div>

				<Route exact path="/register" component={Register} />
				<Route exact path="/" component={MarketingPage} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute exact path="/library" component={Library}/>
				<Route exact path="/login" component={Login} />
			</div>
		</Router>
	);
};

export default App;
