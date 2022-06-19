import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={event => setUsername(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Login;