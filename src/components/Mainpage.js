import Calendar from './Calendar';
import React, { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router';
import Date from './Habits/Date.js';
import Habits from './Habits/Habits';
import NewHabit from './NewHabit/NewHabit';
import axios from 'axios';
import background from ".././img/formbg2.jpg";
import { toast } from 'react-toastify';
// import QueryForm from './HabitForm';
import Sidebar from './Sidebar';
import HabitForm from './HabitForm';
import ScheduleForm from './ScheduleForm';
import search from '.././img/search.svg'
import {
    nextDay,
    startOfToday,
    startOfWeek,
    format
} from 'date-fns'

// let myHabits = [
//     {
//         _id: '1',
//         name: 'Exercise',
//         importance: 'High',
//         weeks: 1,
//         total: 0,
//         checkedId: [],
//     },
//     {
//         _id: '2',
//         name: 'Walking 10 minutes a day',
//         importance: 'Moderate',
//         weeks: 1,
//         checkedId: [],
//     },
//     {
//         _id: '3',
//         name: 'Playing chess',
//         importance: 'Low',
//         weeks: 1,
//         checkedId: [],
//     }
// ]

// let myHabits = [];
let firstday = startOfWeek(startOfToday())
let sunday = format(firstday, 'MM-dd-yyyy')
let monday = format(nextDay((firstday), 1), 'MM-dd-yyyy')
let tuesday = format(nextDay((firstday), 2), 'MM-dd-yyyy')
let wednesday = format(nextDay((firstday), 3), 'MM-dd-yyyy')
let thursday = format(nextDay((firstday), 4), 'MM-dd-yyyy')
let friday = format(nextDay((firstday), 5), 'MM-dd-yyyy')
let saturday = format(nextDay((firstday), 6), 'MM-dd-yyyy')

export const MainPageTheme = createContext();

const meetings = [
    {
      id: 1,
      name: 'Leslie Alexander',
      startDatetime: '2022-05-11T13:00',
      endDatetime: '2022-05-11T14:30',
    },
    {
      id: 2,
      name: 'Michael Foster',
      startDatetime: '2022-05-20T09:00',
      endDatetime: '2022-05-20T11:30',
    },
    {
      id: 3,
      name: 'Dries Vincent',
      startDatetime: '2022-05-20T17:00',
      endDatetime: '2022-05-20T18:30',
    },
    {
      id: 4,
      name: 'Leslie Alexander',
      startDatetime: '2022-06-09T13:00',
      endDatetime: '2022-06-09T14:30',
    },
    {
      id: 5,
      name: 'Michael Foster',
      startDatetime: '2022-05-13T14:00',
      endDatetime: '2022-05-13T14:30',
    },
    {
      id: 6,
      name: 'Dries Vincent',
      startDatetime: '2022-05-20T17:00',
      endDatetime: '2022-05-20T18:30',
    },
    {
      id: 7,
      name: 'Dries Vincent',
      startDatetime: '2022-05-20T17:00',
      endDatetime: '2022-05-20T18:30',
    },
    {
      id: 8,
      name: 'Dries Vincent',
      startDatetime: '2022-05-20T17:00',
      endDatetime: '2022-05-20T18:30',
    },
    {
      id: 9,
      name: 'Dries Vincent',
      startDatetime: '2022-05-20T17:00',
      endDatetime: '2022-05-20T18:30',
    },
  ]

function Mainpage() {
    let navigate = useNavigate();
    const [habits, setHabits] = useState([]);
    const [schedule, setSchedule] = useState(meetings)
    useEffect(() => {
        const token = localStorage.getItem('token');
        const baseUrl = "http://localhost:5000/api";
        // const baseUrl = process.env.REACT_APP_ROOT_API;
        axios.get(`${baseUrl}/habit`, {
            headers: {
                "accessToken": token,
            }
        }).then(res => {
            const { data } = res;
            if (data.success) {
                let foundHabits = res.data.habits;
                setHabits(foundHabits);
            } else {
                toast.error(data.message);
                navigate('/login');
            }
        }).catch(err => {
            toast.error(err.response.data);
            navigate('/login');
        });
    }, [])


    const [date, setDate] =
        useState([sunday, monday, tuesday, wednesday, thursday, friday, saturday])

    const addNewHabit = (habit) => {
        const token = localStorage.getItem('token');
        // const baseUrl = process.env.REACT_APP_ROOT_API;
        const baseUrl = "http://localhost:5000/api"
        let body = {habit};
        axios.post(`${baseUrl}/habit`, body, {
            headers: {
                "accessToken": token,
            }
        }).then(res => {
            const foundHabits = res.data.habits;
            setHabits(foundHabits);
        }).catch(err => {
            toast.error(err.response.data);
        });
    }

    const addNewSchedule = (schedule) => {
        setSchedule((prevSchedule) => {
            return [schedule, ...prevSchedule];
        })
    }

    // console.log("myhabits: ", myHabits)

    console.log("schedule: ", schedule)

    const value = {
        schedule,
        habits,
        setHabits,
    }

    return (
        <MainPageTheme.Provider value = {value}>
            <React.Fragment>
                {/* <img src={background} alt="" className='habit__background'/> */}
                <Sidebar/>
                <Calendar onChangeDate={setDate} />
                <div className='body__container'>
                    <div className = 'page__container'>
                        <div className="habit__welcome">
                            <div className="habit__hello">
                                <div className="hello__title">Hello, Jane</div>
                                <div className="hello__content">Hurry up and finish the task today</div>
                            </div>
                            <div className="habit__search">
                                <input type="text" placeholder='Search'/>
                                <div className="search__icon">
                                    <img src={search} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='habit__table'>
                            <Date daterange={date}></Date>
                            <Habits
                                items={habits}
                                daterange={date}
                            />
                            
                            {/* <NewHabit onNewHabit={addNewHabit} /> */}
                        </div>
                        <div className='form__query'>
                            <HabitForm onNewHabit={addNewHabit}></HabitForm>
                            <ScheduleForm onNewSchedule = {addNewSchedule}></ScheduleForm>
                        </div>
                        {/* <QueryForm/> */}
                    </div>
                </div>
            </React.Fragment>
        </MainPageTheme.Provider>
    );
}

export default Mainpage;
