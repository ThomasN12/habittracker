import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
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
            const { data } = res;
            if (data.success) {
                localStorage.setItem('token', data.token);
                navigate('/main');
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        }).catch(err => {
            toast.error(err.response.data);
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