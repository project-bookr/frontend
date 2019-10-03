import React,{useState,useEffect} from "react";
import {connect} from "react-redux";
import {toggleFav} from "../../actions";


const Book=( props ) => {
	console.log( props );

	const booktitled=props.match.params.book.id;
	const singleBook=props.books.find( book   => `${book.id}`===booktitled);
	// } const {thumbnail, title, publisher}=books;
	const { isFav } = props;
	return (
		<div className={`card ${isFav ? "" : ""}`}>
			<div>
			<button onClick={toggleFav}>add to favorites</button>
							<img src={singleBook.thumbnail} alt={singleBook.title} />
						</div>
						<h3>{singleBook.title}</h3>
			<h4>{singleBook.publisher}</h4>
			
					</div>
	);
};
// render() {
// 	const { isFav } = props;

// 	return (
// 	  <div className="App">
// 		<button onClick={toggleFav}>Show Box</button>
  
// 		<div className={`box ${isFav ? "" : ""}}></div>
// 		  <p>I'm the box</p>
// 		</div>
  
// 	  </div>
// 	);
//   }


const mapStateToProps = (state) => {
	return {
		books: state.books,
		isFav:state.isFav,
	};
};

export default connect(
	mapStateToProps,
	{toggleFav}
)(Book);