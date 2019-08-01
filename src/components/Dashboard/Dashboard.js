import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import {fetchbooks, addFavorite, removeFavorite} from "../../actions/index";

import Library from "../Library/Library.js";

class Dashboard extends Component {
	state;
	componentDidMount() {
		this.props.fetchbooks();
		console.log(this.props.books);
	}
	addFav(id) {
		this.props.addFavorite(id);
	}
	remFav(id) {
		this.props.removeFavorite(id);
	}
	render() {
		return (
			<div>
				<div>
					<Link to="/library">My Library</Link>
					<PrivateRoute
						to="/library"
						component={Library}
						books={this.props.books}
					/>
				</div>
				{this.props.books.map((book) => {
					return (
						<div key={book.id}>
							<h6>{book.publisher}</h6>
							<img src={book.cover} alt={book.title} />
							<h2>{book.title}</h2>
							<button onClick={() => this.addFav(book.id)}>
								addFav
							</button>
							<button
								onClick={() =>
									this.props.removeFavorite(book.id)
								}>
								removeFav
							</button>
						</div>
					);
				})}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		books: state.books,
		favoriteBooks: state.favoriteBooks,
	};
};

export default connect(
	mapStateToProps,
	{fetchbooks, addFavorite, removeFavorite}
)(Dashboard);
