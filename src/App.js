import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Mainpage from './components/Mainpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './components/Landing';
import ForgotEmail from './components/Auth/ForgotEmail';
import NewPassword from './components/Auth/NewPassword';

function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="868855841872-rqi0fq7l869n55toq9f1js9f977ugd35.apps.googleusercontent.com">
        {/* <Router basename={"/habittracker"}>
            <Routes>
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path="/main" element={<Mainpage />} />
            </Routes>
        </Router> */}
        <HashRouter>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path="/main" element={<Mainpage />} />
              <Route path="/forgotpassword" element={<ForgotEmail/>} />
              <Route path="/newpassword/:token" element={<NewPassword/>} />
            </Routes>
        </HashRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />

      </GoogleOAuthProvider>


    </>
  );
}

export default App;
