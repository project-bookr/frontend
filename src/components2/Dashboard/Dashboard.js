import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchbooks} from "../../actions/index";

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchbooks();
	}

	render() {
		return (
			<div>
				{this.props.books.map((book) => {
					return (
						<div key={book.id}>
							<h6>{book.publisher}</h6>
							<img src={book.cover} alt={book.title}></img>
							<h2>{book.title}</h2>
						</div>
					);
				})}
				
			</div>
		);
	}
}
const mapStateToProps = ({books}) => {
	return {
		books,
	};
};

export default connect(
	mapStateToProps,
	{fetchbooks}
)(Dashboard);
