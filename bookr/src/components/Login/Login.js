import React, {Component} from "react";
import {login} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Login extends Component {
	state = {
		email: "",
		password: "",
	};
	handleInputChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};
	login = (e) => {
		e.preventDefault();
		this.props.login(this.state);
		this.setState({
			email: "",
			password: "",
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.login}>
					<input
						type="text"
						onChange={this.handleInputChange}
						name="email"
						placeholder="email"
						value={this.state.username}
						required
					/>
					<input
						type="password"
						onChange={this.handleInputChange}
						name="password"
						placeholder="enter your password"
						value={this.state.password}
						required
					/>
					<button>Log In</button>
				</form>
			</div>
		);
	}
}
const mapStateToProps = ({loggingIn}) => {
	return {
		loggingIn: loggingIn,
	};
};

export default connect(
	mapStateToProps,
	{login}
)(Login);
