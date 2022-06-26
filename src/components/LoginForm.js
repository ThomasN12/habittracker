import background from "../img/formbg2.jpg";
import google from "../img/google.png"
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

import "./LoginForm.css"

const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const responseSuccessGoogle = (res) => {
        const baseUrl = "http://localhost:5000/api"
            // process.env.REACT_APP_ROOT_API;
            
        axios.post(`${baseUrl}/user/googlelogin`, {idToken: res.credential}).then(res => {
            const { data } = res;
            if (data.success) {
                localStorage.setItem('token', data.token);
                navigate('/main');
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        }).catch(err => {
            toast.error(err.message);
        })
    }

    const responseErrorGoogle = (err) => {
        toast.error(err.message);
    }
    const submitHandler = (event) => {
        const baseUrl = "http://localhost:5000/api"
        // const baseUrl = process.env.REACT_APP_ROOT_API;
        axios.post(`${baseUrl}/user/login`, {
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
            toast.error(err.message);
        })
    }

    return (
        <div className="login__container">
            <img src={background} alt="" />
            <div className="login__form">
                <div className="login__block">
                    <div className="login__welcome">
                        <h2>Welcome</h2>
                    </div>
                    <div className="login__account">
                        <input type="text" placeholder="Enter your email" value={username} onChange={event => setUsername(event.target.value)} />
                    </div>
                    <div className="login__password">
                        <input type="password" placeholder="Enter your password" onChange={event => setPassword(event.target.value)} />
                    </div>
                    <div className="login__utilities">
                        <div className="login__rememberme">
                            <input type="checkbox" id="remember" />
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
                            <span><img src={google} alt="" /></span>
                            <span>Sign in with Google</span>
                        </div>
                    </div>
                    <div className="login__signup">
                        <span>Don't have an account? &nbsp;&nbsp;</span>
                        <a href="#"> Sign up</a>
                    </div>
                    <GoogleLogin
                        buttonText="Login"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={'single_host_origin'}
                        useOneTap
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginForm