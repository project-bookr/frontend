import React from "react";
import {removeFavorite} from "../../actions"
import {connect} from "react-redux";

const Favorites=( {favoritebooks} ) => {
    return (
        <div>
        {favoritebooks.map( ( book )=>{
            return (
                <div >
                    {book.title}
                    <img src={book.thumbnail} alt={book.title} />
                    <button onClick={() => this.remFav( book.id )}>remove</button>
                </div>
            )
        })}
        </div>
    )
}
const mapStateToProps = (state) => {
	return {
		books: state.books,
		favoriteBooks:state.favoriteBooks,
	};
};

export default connect(
	mapStateToProps,
	{ removeFavorite}
)(Dashboard);
