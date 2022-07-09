import { Link } from "react-router-dom";
const CompleteSubmission = (props) => {
    return (
        <>
            <h1>{props.message}</h1>
            <Link to="/login">Back to login</Link>
        </>
    )
}

export default CompleteSubmission;