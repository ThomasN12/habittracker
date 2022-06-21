import background from "../img/formbg2.jpg";
import google from "../img/google.png"
import "./LoginForm.css"

const LoginForm = () => {
    return (
        <div className="login__container">
        <img src={background} alt=""/>
        <div className="login__form">
            <div className="login__block">
                <div className="login__welcome">
                    <h2>Welcome</h2>
                </div>
                <div className="login__account">
                    <input type="text" placeholder="Enter your email"/>
                </div>
                <div className="login__password">
                    <input type="password" placeholder="Enter your password"/>
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
                        <span>Sign in</span>
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