import LoginForm from './LoginForm';
import "./LoginForm.css";
import React from 'react';
import axios from 'axios';

const Login = (props) => {
    return (
        <>
            {/* <Form onSubmit={submitHandler}>
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
            </Form> */}
            <LoginForm/>
        </>
    )
}

export default Login;