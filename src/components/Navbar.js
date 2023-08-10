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
        <div>
            {userInfo ? <>
                <div class="header">
                    <div href="#default" class="logo">Home</div>
                    <div class="header-right">
                        <Link to="/dashboard"><div class="active" href="#home">Go to DashBoard</div></Link> 
                        <div className='logout' onClick={logOut}>Log Out</div>
                    </div>
                </div>
            </>
                : <div class="header">
                    <a href="#default" class="logo">Home</a>
                    <div class="header-right">
                        <Link to="/login"><div class="active" href="#home">Sign in</div></Link> 
                        <Link to='/register'><div  className='logout'>Sign up</div></Link> 
                    </div>
                </div>}
        </div>
    );
}

export default Navbar;