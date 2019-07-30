import React from "react";
import {connect} from "react-redux";
import Dashboard from "../Dashboard/Dashboard";

const Library = ({books}) => {
	return (
		<div>
			{books.map( ( book )=>{
				return (
					<div>
						{book.title}
					</div>
				)
			})}
		</div>
	);
};

const mapStateToProps = (state,) => {
	return {
		books: state.books,
	};
};
export default connect(
	mapStateToProps,
	{}
)(Library);
