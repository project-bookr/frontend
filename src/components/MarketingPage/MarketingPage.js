import React from 'react';
import {login} from "../../actions";
import {connect} from "react-redux";



const MarketingPage=()=> {
    return (
        <div>
            <button onClick={() => this.props.history.push( "/dashboard" )}>
            <strong>
            Bookr
            </strong>
            </button>
            
        </div>
	);
}
const mapStateToProps = ({loggingIn}) => {
	return {
	  loggingIn: loggingIn
	};
  };
  
  export default connect(
	mapStateToProps,
	{login}
  )( MarketingPage);
