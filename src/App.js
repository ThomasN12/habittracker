import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Login';
import Register from './components/Register';
import Mainpage from './components/Mainpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Date from './components/Habits/Date.js'
// import Example from './components/Calendar';
// import Habits from './components/Habits/Habits';
// import NewHabit from './components/NewHabit/NewHabit';
// import {
//   nextDay,
//   startOfToday,
//   startOfWeek,
//   format
// } from 'date-fns'

// const myHabits = [
//   {
//     id: '1',
//     name: 'Exercise',
//     importance: 'High',
//     weeks: 1,
//     total: 0,
//     checkedId: [],
//   },
//   {
//     id: '2',
//     name: 'Walking 10 minutes a day',
//     importance: 'Moderate',
//     weeks: 1,
//     checkedId: [],
//   },
//   {
//     id: '3',
//     name: 'Playing chess',
//     importance: 'Low',
//     weeks: 1,
//     checkedId: [],
//   }
// ]

// let firstday = startOfWeek(startOfToday())
// let sunday = format(firstday, 'MM-dd-yyyy')
// let monday = format(nextDay((firstday), 1),'MM-dd-yyyy')
// let tuesday = format(nextDay((firstday), 2),'MM-dd-yyyy')
// let wednesday = format(nextDay((firstday), 3),'MM-dd-yyyy')
// let thursday = format(nextDay((firstday), 4),'MM-dd-yyyy')
// let friday = format(nextDay((firstday), 5),'MM-dd-yyyy')
// let saturday = format(nextDay((firstday), 6),'MM-dd-yyyy')


function App() {

  // const [habits, setHabits] = useState(myHabits);


  // const [date, setDate] = 
  //   useState([sunday, monday, tuesday, wednesday, thursday, friday, saturday])

  // const addNewHabit = (habit) =>{
  //   setHabits((prevHabits) => {
  //     return [...prevHabits, habit];
  //   })
  // }

  // console.log("myhabits: ", myHabits)

  return (
    <>
      <GoogleOAuthProvider clientId="868855841872-rqi0fq7l869n55toq9f1js9f977ugd35.apps.googleusercontent.com">
        <BrowserRouter>
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
