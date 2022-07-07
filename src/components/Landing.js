import React from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => {
    return (
        <>
            <h1>This is the landing page</h1>
            <Link to="/login">Sign in</Link>
            <Link to="/register">Sign Up</Link>
        </>
    )
}

export default Landing;