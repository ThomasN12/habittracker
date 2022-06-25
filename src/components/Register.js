import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import axios from 'axios';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(username, password);
        const baseUrl = process.env.REACT_APP_ROOT_API;
        axios.post(`${baseUrl}/user/register`, {
            username: username,
            password: password,
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            navigate('/main');
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Enter username</label>
                    <input type="text" name="" id="username" value={username} onChange={event => setUsername(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Enter password</label>
                    <input type="password" name="" id="password" value={password} onChange={event => setPassword(event.target.value)} />
                </div>
                <button type="submit">Create account</button>
            </form>
        </>
    )
}

export default Register;