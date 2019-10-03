import React from "react";
import {connect} from "react-redux";


class Library extends React.Component {
	componentDidMount() {
		
	}
		render(){
			return (
				<div className="container">
					{this.props.favoriteBooks.map( ( book ) => {
						return (

							<div className="card">
								<div>
									<img src={book.thumbnail} alt={book.title} />
								</div>
								<h3>{book.title}</h3>
								<h4>{book.publisher}</h4>
							</div>
						);
					} )}
				</div>
			);
		};
	};


const mapStateToProps = (state) => {
	return {
		books: state.books,
		favoriteBooks: state.favoriteBooks,
	};
};
export default connect(
	mapStateToProps,
	{}
)(Library);
