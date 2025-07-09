import React, { useState, useRef } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import background from "../../img/formbg2.jpg";
import google from "../../img/google.png";

import "./LoginForm.css";

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [emailIsTouched, setEmailIsTouched] = useState(false);
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const navigate = useNavigate();
    const googleLoginRef = useRef();

    const baseUrl = process.env.REACT_APP_ROOT_API || "https://habit-tracker-server.herokuapp.com/api";

    const responseSuccessGoogle = (res) => {
        console.log('Google login started');
        setIsGoogleLoading(true);
        console.log('Google login response:', res);
        
        if (!res.credential) {
            console.error('No credential received from Google');
            toast.error('Google login failed: No credential received');
            setIsGoogleLoading(false);
            return;
        }
        
        axios.post(`${baseUrl}/user/googlelogin`, { idToken: res.credential })
            .then(res => {
                const { data } = res;
                console.log('Server response:', data);
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    navigate('/main');
                    toast.success(data.message || 'Successfully signed in with Google!');
                } else {
                    toast.error(data.message || 'Google login failed');
                }
            })
            .catch(err => {
                console.error('Google login error:', err);
                if (err.response && err.response.data) {
                    toast.error(err.response.data.message || 'Google login failed');
                } else {
                    toast.error('Network error during Google login. Please try again.');
                }
            })
            .finally(() => {
                setIsGoogleLoading(false);
            });
    };

    const responseErrorGoogle = (err) => {
        console.error('Google login error:', err);
        setIsGoogleLoading(false);
        toast.error('Google login failed. Please try again.');
    };

    const handleGoogleButtonClick = () => {
        console.log('Google button clicked');
        if (googleLoginRef.current) {
            console.log('Triggering Google login');
            googleLoginRef.current.click();
        } else {
            console.error('Google login ref not found');
            toast.error('Google login not available');
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        // Basic validation
        if (!email.trim()) {
            toast.error('Email is required');
            return;
        }
        
        if (!password.trim()) {
            toast.error('Password is required');
            return;
        }

        setIsLoading(true);
        axios.post(`${baseUrl}/user/login`, {
            email: email,
            password: password,
        })
            .then(res => {
                const { data } = res;
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    navigate('/main');
                    toast.success(data.message);
                } else {
                    toast.error(data.message);
                }
            })
            .catch(err => {
                console.error('Login error:', err);
                if (err.response && err.response.data) {
                    toast.error(err.response.data.message || 'Login failed');
                } else {
                    toast.error('Network error. Please try again.');
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const emailIsValid = email.trim() !== '';
    const emailInputIsInvalid = !emailIsValid && emailIsTouched;

    const emailChangeHandler = (event) => {
        setEmailIsTouched(true);
        setEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const emailBlurHandler = () => {
        setEmailIsTouched(true);
    };

    return (
        <form className="login__container" onSubmit={submitHandler}>
            <img src={background} alt="Background" />
            <div className="login__form">
                <div className="login__block">
                    <div className="login__welcome">
                        <h2>Welcome</h2>
                    </div>
                    <div className="login__account">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                        />
                    </div>
                    <div className='login__invalid'>
                        {emailInputIsInvalid && <span>Email must not be empty</span>}
                    </div>
                    <div className="login__password">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                    </div>
                    <div className="login__utilities">
                        <div className="login__rememberme">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className="login__forgot">
                            <Link to="/forgotpassword">Forgot password</Link>
                        </div>
                    </div>
                    <div className="login__signin">
                        <button
                            type="submit"
                            className="login__signin--btn"
                            disabled={isLoading}
                        >
                            <span>{isLoading ? 'Signing in...' : 'Sign in'}</span>
                        </button>
                    </div>
                    <div className="login__google">
                        <GoogleLogin
                            onSuccess={responseSuccessGoogle}
                            onError={responseErrorGoogle}
                            useOneTap
                        />
                    </div>
                    <div className="login__signup">
                        <span>Don't have an account? &nbsp;&nbsp;</span>
                        <Link to="/register">Sign Up</Link>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
