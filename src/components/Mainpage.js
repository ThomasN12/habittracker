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
import TaskList from './TaskList';
import ScheduleForm from './ScheduleForm';
import search from '.././img/search.svg'
import {
    nextDay,
    startOfToday,
    startOfWeek,
    format,
    parseISO
} from 'date-fns'

let firstday = startOfWeek(startOfToday())
let sunday = format(firstday, 'MM-dd-yyyy')
let monday = format(nextDay((firstday), 1), 'MM-dd-yyyy')
let tuesday = format(nextDay((firstday), 2), 'MM-dd-yyyy')
let wednesday = format(nextDay((firstday), 3), 'MM-dd-yyyy')
let thursday = format(nextDay((firstday), 4), 'MM-dd-yyyy')
let friday = format(nextDay((firstday), 5), 'MM-dd-yyyy')
let saturday = format(nextDay((firstday), 6), 'MM-dd-yyyy')

export const MainPageTheme = createContext();

function Mainpage() {
    let navigate = useNavigate();
    const [habits, setHabits] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [checkedTask, setCheckedTask] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        // const baseUrl = "http://localhost:5000/api";
        const baseUrl = process.env.REACT_APP_ROOT_API;
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
                return;
            }
        }).catch(err => {
            toast.error(err.response.data);
            navigate('/login');
            return;
        });

        axios.get(`${baseUrl}/schedule`, {
            headers: {
                "accessToken": token,
            }
        }).then(res => {
            const { data } = res;
            if (data.success) {
                let foundSchedules = res.data.schedules;
                setSchedule(foundSchedules);
                let checkedTask = foundSchedules.filter(schedule => schedule.checked).map(schedule => schedule._id);
                setCheckedTask(checkedTask);
            } else {
                toast.error(data.message);
                navigate('/login');
                return;
            }
        }).catch(err => {
            toast.error(err.response.data);
            navigate('/login');
            return;
        });
    }, [])

    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today);

    const [date, setDate] =
        useState([sunday, monday, tuesday, wednesday, thursday, friday, saturday])

    const addNewHabit = (habit) => {
        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_ROOT_API;
        // const baseUrl = "http://localhost:5000/api"
        let body = {habit};
        axios.post(`${baseUrl}/habit`, body, {
            headers: {
                "accessToken": token,
            }
        }).then(res => {
            const { data } = res;
            if (data.success) {
                let foundHabits = data.habits;
                setHabits(foundHabits);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        }).catch(err => {
            toast.error(err.response.data);
        });
    }

    const addNewSchedule = (schedule) => {
        // console.log(schedule);
        // setSchedule((prevSchedule) => {
        //     return [schedule, ...prevSchedule];
        // })
        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_ROOT_API;
        // const baseUrl = "http://localhost:5000/api"
        let body = {schedule};
        axios.post(`${baseUrl}/schedule`, body, {
            headers: {
                "accessToken": token,
            }
        }).then(res => {
            const { data } = res;
            if (data.success) {
                let foundSchedule = data.schedules;
                setSchedule(foundSchedule);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        }).catch(err => {
            toast.error(err.response.data);
        });
    }

    // console.log("myhabits: ", myHabits)

    console.log("schedule: ", schedule)

    const value = {
        schedule,
        habits,
        setHabits,
        today,
        selectedDay,
        setSelectedDay,
        checkedTask,
        setCheckedTask
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
                        <TaskList/>
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
