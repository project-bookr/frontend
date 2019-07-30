import  React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {logout} from '../../actions'

const mapStateToProps=(state) =>{
    return {
        loggingOut:state.loggingOut,
        token:state.token,

    };
}


const Nav= props=> {
    
        return (
            <div>
                
                <Link to='/dashboard'>My DashBoard</Link>
                <Link to='/login' onClick={()=>props.logout()}>LogOUT</Link>
            </div>
        );
    
}

export default connect(
    mapStateToProps,
    {logout}
)(Nav);