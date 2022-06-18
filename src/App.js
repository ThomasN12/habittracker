import './App.css';
import React,{useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Mainpage from './components/Mainpage';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path="/main" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
