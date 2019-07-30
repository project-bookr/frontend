import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, Route, } from 'react-router-dom'
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import {fetchbooks} from "../../actions/index";
import Library from "../Library/Library.js";

class Dashboard extends Component {
	state
 componentDidMount() {
	 this.props.fetchbooks();
	 console.log(this.props.books)
	 
 }

 render() {
  return (
		<div>
			<div>
				<Link to='/library'>My Books</Link>
				<PrivateRoute to="/library" component={Library} books={this.props.books}/>
				
			</div>
    {this.props.books.map((book) => {
     return (
      <div key={book.id}>
       <h6>{book.publisher}</h6>
       <img src={book.cover} alt={book.title} />
       <h2>{book.title}</h2>
      </div>
     );
    })}
   </div>
  );
 }
}
const mapStateToProps = (state) => {
 return {
  books:state.books
 };
};

export default connect(
 mapStateToProps,
 {fetchbooks}
)(Dashboard);
