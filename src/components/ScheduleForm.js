import React, { useState, useContext } from 'react';
import { MainPageTheme } from './Mainpage';
import { format,parseISO } from 'date-fns'

const ScheduleForm = (props) => {

    const mainPageTheme = useContext(MainPageTheme)
    let selectedDay = format(mainPageTheme.selectedDay, 'dd-MMM');

    const [scheduleName, setScheduleName] = useState('');
    const [scheduleImportance, setScheduleImportance] = useState('');
    const [scheduleGenre, setScheduleGenre] = useState('');
    const [scheduleTarget, setScheduleTarget] = useState('');
    const [scheduleDays, setScheduleDays] = useState('');

    const titleChangeHandler = (event) =>{
        setScheduleName(event.target.value);
    }
    const genreChangeHandler = (event) =>{
        setScheduleGenre(event.target.value);
    }
    const targetChangeHandler = (event) =>{
        setScheduleTarget(event.target.value);
    }
    const daysChangeHandler = (event) =>{
        setScheduleDays(event.target.value);
    }

    const importanceChangeHandler = (event) =>{
        setScheduleImportance(event.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        const scheduleData = {
            name: scheduleName,
            startDatetime: mainPageTheme.selectedDay,
            stringDate: selectedDay
            // startDatetime: '2022-05-20T00:00'
        }

        

        const scheduleObject = {
            ...scheduleData, 
            id: Math.random().toString()
        }
        props.onNewSchedule(scheduleObject);

        console.log("scheduleobject: ", scheduleObject)
        

        setScheduleName('');
        setScheduleGenre('');
        setScheduleTarget('');
        setScheduleDays('');
        setScheduleImportance('');
        
    }

    return (
        // <div className="form__query">
        //         <form className="form__content">
        //             <div className="form__title">
        //                 <span>Create new habit today</span>
        //             </div>
        //             <div className="form__query--1">
        //                 <label>What's your habit name?</label>
        //                 <input type="text" placeholder="Playing sport, do exercise, eat clean..." className="queryform__style--1" onChange={titleChangeHandler} value={habitName}/>
        //             </div>
        //             <div className="form__checkbox--1">
        //                 <input type="checkbox"/>
        //                 <label className="queryform__style--1">Send notification automatically</label>
        //             </div>
        //             <div className="form__query--1 mt-32">
        //                 <label>Importance rate of habit</label>
        //                 <input type="text" placeholder="City, airport, region, district..." className="queryform__style--1" onChange={importanceChangeHandler} value={habitImportance}/>
        //             </div>
        //             <div className="form__apply">
        //                 <button className='form__apply--btn' type='submit'>
        //                     <span>Add new habit</span>
        //                 </button>
        //             </div>
        //         </form>
        //         <form className="form__content">
        //             <div className="form__title">
        //                 <span>Create your schedule</span>
        //             </div>
        //             <div className="form__query--1">
        //                 <label>What's your activities or events?</label>
        //                 <input type="text" placeholder="Finish assignments, friend meeting..." className="queryform__style--1"/>
        //             </div>
        //             <div className="form__checkbox--1">
        //                 <input type="checkbox"/>
        //                 <label className="queryform__style--1">Deliver the car somewhere else</label>
        //             </div>
        //             <div className="form__query--1 mt-32">
        //                 <label>Pick up location</label>
        //                 <input type="text" placeholder="City, airport, region, district..." className="queryform__style--1"/>
        //             </div>
        //             <div className="form__apply">
        //                 <button className='form__apply--btn' type='submit'>
        //                     <span>Add new habit</span>
        //                 </button>
        //             </div>
        //         </form>
        //     </div>

        <form className="form__content" onSubmit={submitHandler}>
            <div className="form__title">
                <span>New schedule for {selectedDay}</span>
            </div>
            <div className="form__query--1">
                <label>What's your schedule name?</label>
                <input type="text" placeholder="Playing sport, do exercise, eat clean..." className="queryform__style--1" onChange={titleChangeHandler} value={scheduleName}/>
            </div>
            <div className="form__checkbox--1">
                <input type="checkbox"/>
                <label className="queryform__style--1">Send notification automatically</label>
            </div>
            <div className="form__query--1 mt-32">
                <label>Type of schedule:</label>
                <input type="text" placeholder="Deadline, regular activities..." className="queryform__style--1" onChange={importanceChangeHandler} value={scheduleImportance}/>
            </div>
            <div className="form__apply">
                <button className='form__apply--btn' type='submit'>
                    <span>Add new habit</span>
                </button>
            </div>
        </form>
    )
        
}

export default ScheduleForm;