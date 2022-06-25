import Calendar from './Calendar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Date from './Habits/Date.js';
import Habits from './Habits/Habits';
import NewHabit from './NewHabit/NewHabit';
import axios from 'axios';
import background from ".././img/formbg2.jpg";
import { toast } from 'react-toastify';
import QueryForm from './QueryForm';
import Sidebar from './Sidebar';
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


function Mainpage() {
    let navigate = useNavigate();
    const [habits, setHabits] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
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
        const baseUrl = process.env.REACT_APP_ROOT_API;
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

    // console.log("myhabits: ", myHabits)

    return (
        <React.Fragment>
            {/* <img src={background} alt="" className='habit__background'/> */}
            <Sidebar/>
            <Calendar onChangeDate={setDate} />
            <div className='body__container'>
                <div className = 'page__container'>
                    
                    <QueryForm/>
                    <div className='habit__table'>
                        <Date daterange={date}></Date>
                        <Habits
                            items={habits}
                            daterange={date}
                        />
                        <NewHabit onNewHabit={addNewHabit} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Mainpage;
