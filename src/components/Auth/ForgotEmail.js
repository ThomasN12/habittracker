import background from "../../img/formbg2.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import CompleteSubmission from "./CompleteSubmission";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotEmail = () => {
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSucess] = useState(false);
    const submitHandler = (event) => {
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_ROOT_API;
        let body = { email: email };
        axios.post(`${baseUrl}/user/forgot-password`, body).then(res => {
            const { data } = res;
            if (data.success)
            {
                toast.success(data.message);
                setIsSucess(true);
            } else
            {
                toast.error(data.message);
            }
        }).catch(err => {
            toast.error(err.response.data);
        });
    }
    if (!isSuccess)
    {
        return (
            <>
                <form className="forgot__container"
                    onSubmit={submitHandler}
                >
                    <img src={background} alt="" />
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
                            <div className="forgot__submit">
                                <button type='submit' className="forgot__submit--btn">
                                    <span>Submit</span>
                                </button>
                            </div>
                            <div className="signup__signup">
                                <Link to="/login">Back to login</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    } else
    {
        return <CompleteSubmission message="Send password reset to email DONE!"/>
    }
}

export default ForgotEmail