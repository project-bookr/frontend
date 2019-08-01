import React from "react";
import {connect} from "react-redux";

const Library = ({books}) => {
	return (
		<div className="container">
			{books.map((book) => {
				return (

					<div className="card">
						<div>
							<img src={book.thumbnail} alt={book.title} />
						</div>
						<h3>{book.title}</h3>
						<h4>{book.publisher}</h4>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		books: state.books,
	};
};
export default connect(
	mapStateToProps,
	{}
)(Library);
