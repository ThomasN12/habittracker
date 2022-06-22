import background from "../img/formbg2.jpg";
import google from "../img/google.png"
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const submitHandler = (event) => {
        // event.preventDefault();
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
        <div className="login__container">
        <img src={background} alt=""/>
        <div className="login__form">
            <div className="login__block">
                <div className="login__welcome">
                    <h2>Welcome</h2>
                </div>
                <div className="login__account">
                    <input type="text" placeholder="Enter your email" value={username} onChange={event => setUsername(event.target.value)} />
                </div>
                <div className="login__password">
                    <input type="password" placeholder="Enter your password" onChange={event => setPassword(event.target.value)}/>
                </div>
                <div className="login__utilities">
                    <div className="login__rememberme">
                        <input type="checkbox" id="remember"/>
                        <label>Remember me</label>
                    </div>
                    <div className="login__forgot">
                        <a href="#">Forgot password</a>
                    </div>
                </div>
                <div className="login__signin">
                    <div className="login__signin--btn">
                        <span onClick={submitHandler}>Sign in</span>
                    </div>
                </div>
                <div className="login__google">
                    <div className="login__google--btn">
                        <span><img src={google} alt=""/></span>
                        <span>Sign in with Google</span>
                    </div>
                </div>
                <div className="login__signup">
                    <span>Don't have an account? &nbsp;&nbsp;</span>
                    <a href="#"> Sign up</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LoginForm