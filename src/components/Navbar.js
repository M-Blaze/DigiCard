import React from 'react';
import './navbar.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';
import {Link} from 'react-router-dom'

function Navbar(props) {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()
    const logOut=()=>{
        dispatch(logout())
    }

    return (
			<div className="header">
				<div className="logo">
					<Link to="/">DigiCard</Link>
				</div>
				<div className="header-right">
					{ 
						userInfo ? 
						(
							<>
								<Link to="/dashboard">
									<div className="active" style={{ marginRight: "10px" }}>Go to DashBoard</div>
								</Link> 
								<div className='logout' onClick={logOut}>Log Out</div>
							</>
						) :
						(
							<>
								<Link to="/login">
									<div className="active" style={{ marginRight: "10px" }}>Sign in</div>
								</Link> 
								<Link to='/register'>
									<div  className='logout'>Sign up</div>
								</Link> 
							</>
						)
					}
				</div>
			</div>
    );
}

export default Navbar;