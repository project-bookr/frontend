import React from "react";
import {Link} from "react-router-dom";
import {removeFavorite} from "../../actions";
import {connect} from "react-redux";
import "../App/App.css"

const FavoriteBooks=( props ) => {
    console.log( props, "myfavoriteBooks" )
    console.log("this.props.favoriteBooks")
	return (
		<div>
			{!props.myfavoriteBooks||props.myfavoriteBooks.length<1? (
				<div>loading.......</div>
			) : (
				props.myfavoriteBooks.map((book) => {
					return (
						<div>
							<Link to={`/favoritebooks/${book.id}`}>
								{book.title}
								<img src={book.thumbnail} alt={book.title} />
								<button onClick={() =>  this.remFav(book.id)}>
									remove
                                </button>
                                <button onClick={() => book.props.isFav? book.className="isFav":"" }>
									remove
								</button>
							</Link>
						</div>
					);
				})
			)}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		books: state.books,
        favoriteBooks: state.favoriteBooks,
        
		
	};
};

export default connect(
	mapStateToProps,
	{removeFavorite}
)(FavoriteBooks);
