import background from "../../img/formbg2.jpg";
import { useState } from "react";

const NewPassword = () => {
    const [email, setEmail] = useState('');
    const [reemail, setReemail] = useState('');
    return (
    <>
            <form className="password__container" 
                // onSubmit={submitHandler}
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
                            <input type="text" placeholder="Enter your email" name="password" id="email" value={email} onChange={event => setEmail(event.target.value)} />
                        </div>
                        <div className="password__instruction">
                            <span>Re-enter your new password</span>
                        </div>
                        <div className="password__account">
                            <input type="text" placeholder="Enter your email" name="repassword" id="email" value={reemail} onChange={event => setReemail(event.target.value)} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default NewPassword