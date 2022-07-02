import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Login';
import Register from './components/Register';
import Mainpage from './components/Mainpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="868855841872-rqi0fq7l869n55toq9f1js9f977ugd35.apps.googleusercontent.com">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/main" element={<Mainpage />} />
          </Routes>
        </BrowserRouter>
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
