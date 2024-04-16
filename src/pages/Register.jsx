import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';

import './register.css'

function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userRegister = useSelector((state) => state.userRegister)
    const {  error, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            navigate('/login')
        }
    }, [userInfo,navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }
    return (
        <>  
            <div className="signup-box" style={{ marginTop:"20px", paddingTop: "20px" }}>
                <h1 style={{ paddingLeft: 20 }}>Sign Up</h1>
                {message && <div>{message}</div>}

                {error && <div>{error.errors}</div>}
                <form onSubmit={submitHandler} className='form' style={{ marginBottom: "20px" }}>
                    {error && error.name && <div>{error.name}</div>}
                    <label className='label'>First Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} className='input' type="text" />
                    {error && error.email && <div>{error.email}</div>}

                    <label className='label'>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='input' type="email" />
                    {error && error.password && <div>{error.password}</div>}

                    <label className='label'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='input' type="password" />
                    <label className='label'>Confirm Password</label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className='input' type="password" />
                    <button className='button' type="submit" value="Register">Register</button>
                </form>
                <p className="para-2">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>

        </>

    );
}

export default RegisterPage;