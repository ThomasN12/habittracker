import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import axios from 'axios';
import google from "../img/google.png"
import background from "../img/formbg2.jpg";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(email, password);
        const baseUrl = process.env.REACT_APP_ROOT_API;
        // const baseUrl = "http://localhost:5000/api"
        axios.post(`${baseUrl}/user/register`, {
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
            toast.error(err.response.data);
        })
    }
    return (
        <>
            {/* <h1>Register</h1>
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
            </form> */}


            <form className="signup__container" onSubmit={submitHandler}>
                <img src={background} alt=""/>
                <div className="signup__form">
                    <div className="signup__block">
                        <div className="signup__welcome">
                            <h2>Get's started</h2>
                        </div>
                        <div className="signup__account">
                            <input type="text" placeholder="Enter your email" name="" id="email" value={email} onChange={event => setEmail(event.target.value)} />
                        </div>
                        <div className="signup__password">
                            <input type="password" placeholder="Enter your password" name="" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
                        </div>
                        <div className="signup__utilities">
                            <div className="signup__rememberme">
                                <input type="checkbox" id="remember"/>
                                <label for="remember">I agree with Terms and Privacy</label>
                            </div>
                        </div>
                        <div className="signup__signin">
                            <button type='submit' className="signup__signin--btn">
                                <span>Sign up</span>
                            </button>
                        </div>
                        <div className="signup__google">
                            <div className="signup__google--btn">
                                <span><img src={google} alt=""/></span>
                                <span>Sign up with Google</span>
                            </div>
                        </div>
                        <div className="signup__signup">
                            <span>Already have an account &nbsp;
                            &nbsp;</span>
                            
                            <a href="#"> Log in</a>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register;