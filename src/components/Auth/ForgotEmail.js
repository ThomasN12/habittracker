import background from "../../img/formbg2.jpg";
import { useState } from "react";

const ForgotEmail = () => {
    const [email, setEmail] = useState('');
    return (
    <>
            <form className="forgot__container" 
                // onSubmit={submitHandler}
            >
                <img src={background} alt=""/>
                <div className="forgot__form">
                    <div className="forgot__block">
                        <div className="forgot__welcome">
                            <h2>Find your account</h2>
                        </div>
                        <div className="forgot__instruction">
                            <span>Please enter your email to search for your account</span>
                        </div>
                        <div className="forgot__account">
                            <input type="text" placeholder="Enter your email" name="" id="email" value={email} onChange={event => setEmail(event.target.value)} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ForgotEmail