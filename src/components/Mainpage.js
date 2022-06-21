import Calendar from './Calendar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Date from './Habits/Date.js';
import Habits from './Habits/Habits';
import NewHabit from './NewHabit/NewHabit';
import axios from 'axios';

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

let myHabits = [];
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
    const [habits, setHabits] = useState(myHabits);
    useEffect(() => {
        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_ROOT_API;
        axios.get(`${baseUrl}/habit`, {
            headers: {
                "auth-token": token,
            }
        }).then(res => {
            let foundHabits = res.data.habits;
            // foundHabits.forEach(habit => {
            //     habit.checkedId = habit.checkedId.map(e => {
            //         return new Date(e);
            //     });
            // })
            // console.log(foundHabits);
            setHabits(foundHabits);
        }).catch(err => {
            console.log(err);
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
                "auth-token": token,
            }
        }).then(res => {
            const foundHabits = res.data.habits;
            setHabits(foundHabits);
        }).catch(err => {
            console.log(err);
        });
    }

    console.log("myhabits: ", myHabits)

    return (
        <>
            <Calendar onChangeDate={setDate} />
            <div className='habit__table'>
                <Date daterange={date}></Date>
                <Habits
                    items={habits}
                    daterange={date}
                />
                <NewHabit onNewHabit={addNewHabit} />
            </div>
        </>
    );
}

export default Mainpage;
