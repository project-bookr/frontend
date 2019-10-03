import React, {Component} from "react";
import {connect} from "react-redux";
import {Route,Link} from "react-router-dom";

import {toggleFav,fetchbooks, addFavorite, removeFavorite} from "../../actions/index";

import FavoriteBooks from "../FavoriteBooks/FavoriteBooks.js";

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchbooks();
		console.log(this.props.books);
	}
	addFav( id ) {
		this.props.addFavorite( id );
		console.log( this.props.favoriteBooks, "b4setState==>thispropsfavoriteBooks" );
		
		console.log( this.props, "aftersetstate==>this.props.favoriteBooks" );
	};  
	remFav(id) {
		this.props.removeFavorite(id);
	}
	render() {
		return (
			<div >
				
				{this.props.books.map((book) => {
					return (
						<div className="cardimage" key={book.id}>
							

							<Link to={`/favoritebooks/${book.id}`}>
								<h6>{book.publisher}</h6>
								<img src={book.cover} alt={book.title} />
								<h2>{book.title}</h2>
							</Link>
							<div >
							<button onClick={toggleFav}>add/remove favorite</button>
							<button onClick={() => this.addFav(book.id)}>addFav</button>
							<button	onClick={() => this.props.removeFavorite(book.id)}>removeFav</button>
							</div>
							
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
	{fetchbooks, addFavorite, removeFavorite,toggleFav}
)(Dashboard);
