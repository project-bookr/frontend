import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import {toggleFav} from "./../../actions";
import {connect} from "react-redux";

class SingleBook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: {},
			isFav: false,
		};
	}

	componentDidMount() {
		let bookid;
		if (this.props.book.id) {
			bookid = this.props.book.id;
		} else {
			bookid = this.props.match.params.book.id;
		}
		const foundUser = this.props.books.find(
			(book) => book.id === Number(book.id)
		);
		if (!foundUser) return;
		this.setState({book: foundUser});
	}

	render() {
		const {title, thumbnail, rating, published} = this.state.book;
		return (
			<div className="friend-wrapper">
				<p>{title}</p>
				<img src={thumbnail} alt={title} />
				<p>{rating}</p>
				<p>{published}</p>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		isFav: state.isFav,
		books: state.books,
	};
};

export default connect(
	mapStateToProps,
	{}
)(SingleBook);
