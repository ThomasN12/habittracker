import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router';
import "./LoginForm.css";

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(username, password);
        const baseUrl = process.env.REACT_APP_ROOT_API;
        axios.post(`${baseUrl}/user/login`, {
            username: username,
            password: password,
        }).then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            navigate('/main');

        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <LoginForm></LoginForm>
        </>
    )
}

export default Login;