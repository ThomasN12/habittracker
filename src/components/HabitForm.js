import React, { useState } from 'react';


const HabitForm = (props) => {

    const [habitName, setHabitName] = useState('');
    const [habitImportance, setHabitImportance] = useState('');
    const [habitGenre, setHabitGenre] = useState('');
    const [habitTarget, setHabitTarget] = useState('');
    const [habitDays, setHabitDays] = useState('');

    const titleChangeHandler = (event) =>{
        setHabitName(event.target.value);
    }
    const genreChangeHandler = (event) =>{
        setHabitGenre(event.target.value);
    }
    const targetChangeHandler = (event) =>{
        setHabitTarget(event.target.value);
    }
    const daysChangeHandler = (event) =>{
        setHabitDays(event.target.value);
    }

    const importanceChangeHandler = (event) =>{
        setHabitImportance(event.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        const habitData = {
            name: habitName,
            importance: habitImportance,
            // genre: habitGenre,
            // target: habitTarget,
            // days: habitDays,
            // weeks: 1,
            checkedId: [],
            streak: 0,
            record: 0,
        }

        // console.log("habitdata: ", habitData)

        const habitObject = {
            ...habitData, 
        }
        props.onNewHabit(habitObject);

        console.log("Habitobject: ", habitObject)


        setHabitName('');
        setHabitGenre('');
        setHabitTarget('');
        setHabitDays('');
        setHabitImportance('');
    }

    return (
        <form className="form__content" onSubmit={submitHandler}>
            <div className="form__title">
                <span>Create new habit today</span>
            </div>
            <div className="form__query--1">
                <label>What's your habit name?</label>
                <input type="text" placeholder="Playing sport, do exercise, eat clean..." className="queryform__style--1" onChange={titleChangeHandler} value={habitName}/>
            </div>
            <div className="form__checkbox--1">
                <input type="checkbox"/>
                <label className="queryform__style--1">Send notification automatically</label>
            </div>
            {/* <div className="form__query--1 mt-32">
                <label>Importance rate of habit</label>
                <input type="text" placeholder="City, airport, region, district..." className="queryform__style--1" onChange={importanceChangeHandler} value={habitImportance}/>
            </div> */}
            <div className="form__radio mt-32">
                <span>Importance rate of habit</span>
                
                <div className="radio__container">
                    <label className="radio__label">
                        <input type="radio" name="radio"/>
                        <span className="radio__design"></span>
                        <span className="radio__text">Low</span>
                    </label>
                    
                    <label className="radio__label">
                        <input type="radio" name="radio"/>
                        <span className="radio__design"></span>
                        <span className="radio__text">Moderate</span>
                    </label>
                    
                    <label className="radio__label">
                        <input type="radio" name="radio"/>
                        <span className="radio__design"></span>
                        <span className="radio__text">High</span>
                    </label>
                </div>
            </div>
            <div className="form__radio mt-32">
                <span>Habit type</span>
                
                <div className="radio__container">
                    <label className="radio__label">
                        <input type="radio" name="radio"/>
                        <span className="radio__design"></span>
                        <span className="radio__text">Create a good habit</span>
                    </label>
                    
                    <label className="radio__label">
                        <input type="radio" name="radio"/>
                        <span className="radio__design"></span>
                        <span className="radio__text">Break a bad habit</span>
                    </label>
                </div>
            </div>
            <div className="form__apply">
                <button className='form__apply--btn' type='submit'>
                    <span>Add new habit</span>
                </button>
            </div>
        </form>
    )
        
}

export default HabitForm;