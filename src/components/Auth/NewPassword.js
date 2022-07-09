import background from "../../img/formbg2.jpg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import CompleteSubmission from "./CompleteSubmission";


const NewPassword = (props) => {
    const [password, setPassword] = useState('');
    const [repassword, setRepasswword] = useState('');
    const [isSuccess, setIsSucess] = useState(false);
    const { token } = useParams();
    const submitHandler = (event) => {
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_ROOT_API;
        let body = {password : password};
        axios.post(`${baseUrl}/user/newpassword/${token}`, body).then(res => {
            const { data } = res;
            if (data.success) {
                toast.success(data.message);
                setIsSucess(true);
            } else {
                toast.error(data.message);
            }
        }).catch(err => {
            toast.error(err.response.data);
        });
    }   
    if (!isSuccess) {
        return (
            <>
                    <form className="password__container" 
                        onSubmit={submitHandler}
                    >
                        <img src={background} alt=""/>
                        <div className="password__form">
                            <div className="password__block">
                                <div className="password__welcome">
                                    <h2>Create new password</h2>
                                </div>
                                <div className="password__instruction">
                                    <span>Enter your new password</span>
                                </div>
                                <div className="password__account">
                                    <input type="password" placeholder="Enter your password" name="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
                                </div>
                                <div className="password__instruction">
                                    <span>Re-enter your new password</span>
                                </div>
                                <div className="password__account">
                                    <input type="password" placeholder="Enter your password" name="repassword" id="password" value={repassword} onChange={event => setRepasswword(event.target.value)} />
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
    } else {
        return <CompleteSubmission message="Successfully reset your password"/>
    }

}

export default NewPassword