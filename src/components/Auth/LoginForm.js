import background from "../../img/formbg2.jpg";
import google from "../../img/google.png"
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import "./LoginForm.css"

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const responseSuccessGoogle = (res) => {
        const baseUrl = process.env.REACT_APP_ROOT_API;
        // const baseUrl = "https://habit-tracker-server.herokuapp.com/api"
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
        // const baseUrl = "http://localhost:5000/api"
        const baseUrl = process.env.REACT_APP_ROOT_API;
        // const baseUrl = "https://habit-tracker-server.herokuapp.com/api"
        axios.post(`${baseUrl}/user/login`, {
            email: email,
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
                        <input type="text" placeholder="Enter your email" value={email} onChange={event => setEmail(event.target.value)} />
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
                            {/* <a href="#">Forgot password</a> */}
                            <Link to="/forgotpassword">Forgot password</Link>
                        </div>
                    </div>
                    <div className="login__signin">
                        <div className="login__signin--btn" onClick={submitHandler}>
                            <span>Sign in</span>
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
                        {/* <a href="register"> Sign up</a> */}
                        <Link to="/register">Sign Up</Link>
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