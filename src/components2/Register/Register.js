import React, {Component} from "react";
import {register} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Register extends Component {
	state = {
		email: "",
		password: "",
		username: "",
	};
	handleInputChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};
	register = (e) => {
		e.preventDefault();
		this.props
			.register(this.state)
			.then(() => this.props.history.push("/login"));
		this.setState({email: "", username: "", password: ""});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.register}>
					<input
						type="text"
						onChange={this.handleInputChange}
						name="email"
						placeholder="Email"
						value={this.state.email}
						required
					/>

					<input
						type="text"
						onChange={this.handleInputChange}
						name="username"
						placeholder="username"
						value={this.state.username}
						required
					/>

					<input
						type="password"
						onChange={this.handleInputChange}
						name="password"
						placeholder="Create Password"
						value={this.state.password}
						required
					/>

					<button>Sign Up</button>
					
						
						<Link to="/login">Already registered?</Link>
					
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({user}) => {
    return {
      user
    };
  };

export default connect(
	mapStateToProps,
	{register}
)(Register);
