
import { useDispatch, useSelector } from 'react-redux'
import './login.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { login } from '../actions/userActions';
import { Link } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const {  userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [ userInfo,navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    
    return (
        <>
            <div className='waraper'>
                <div className="center">
                    <h1>Login</h1>
                    <form method="post" onSubmit={submitHandler}>
                        <div className="txt_field">
                            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" required />
                            <span></span>
                            <label>Email</label>
                        </div>
                        <div className="txt_field">
                            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <input type="submit" value="Login" />
                        <div className="signup_link">
                            Not a member? <Link to="/register">Signup</Link> 
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}

export default Login;