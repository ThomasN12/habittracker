import './App.css';
import Example from './components/Calendar';
import React,{useState} from 'react'

import Date from './components/Habits/Date.js'
import Habits from './components/Habits/Habits';
import NewHabit from './components/NewHabit/NewHabit';

import {
  nextDay,
  startOfToday,
  startOfWeek,
  format
} from 'date-fns'

const myHabits = [
  {
    id: '1',
    name: 'Exercise',
    importance: 'High',
    weeks: 1,
    total: 0,
    checkedId: [],
  },
  {
    id: '2',
    name: 'Walking 10 minutes a day',
    importance: 'Moderate',
    weeks: 1,
    checkedId: [],
  },
  {
    id: '3',
    name: 'Playing chess',
    importance: 'Low',
    weeks: 1,
    checkedId: [],
  }
]

  let firstday = startOfWeek(startOfToday())
  let sunday = format(firstday, 'dd-MMM-yyyy')
  let monday = format(nextDay((firstday), 1),'dd-MMM-yyyy')
  let tuesday = format(nextDay((firstday), 2),'dd-MMM-yyyy')
  let wednesday = format(nextDay((firstday), 3),'dd-MMM-yyyy')
  let thursday = format(nextDay((firstday), 4),'dd-MMM-yyyy')
  let friday = format(nextDay((firstday), 5),'dd-MMM-yyyy')
  let saturday = format(nextDay((firstday), 6),'dd-MMM-yyyy')


function App() {

  const [habits, setHabits] = useState(myHabits);

  const [date, setDate] = 
    useState([sunday, monday, tuesday, wednesday, thursday, friday, saturday])
  // useState({
  //     monday: monday,
  //     tuesday: tuesday,
  //     wednesday: wednesday,
  //     thursday: thursday,
  //     friday: friday,
  //     saturday: saturday,
  //     sunday: sunday
  // })

  const addNewHabit = (habit) =>{
    setHabits((prevHabits) => {
      return [...prevHabits, habit];
    })
  }

  const saveHabit = (habit) => {
    Object.assign(habits, habit)
    console.log(habits);
  }

  return (
    <>
      <Example onChangeDate = {setDate}/>
      <div className='habit__table'>
          <Date daterange = {date}></Date>
          <Habits items = {habits} daterange = {date} onSaveHabit = {saveHabit}></Habits>
          <NewHabit onNewHabit = {addNewHabit}/>
      </div>
    </>
  );
}

export default App;
