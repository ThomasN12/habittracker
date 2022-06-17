import React, { useState } from 'react';




const HabitForm = (props) =>{

    
    const [habitName, setHabitName] = useState('');
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

    const submitHandler = (e) =>{
        e.preventDefault();

        const habitData = {
            name: habitName,
            genre: habitGenre,
            target: habitTarget,
            days: habitDays,
            weeks: 1,
            checkedId: []
        }
        props.onSaveHabitData(habitData);
        setHabitName('');
        setHabitGenre('');
        setHabitTarget('');
        setHabitDays('');
    }


    return (
        <form className="habitform" onSubmit={submitHandler}>
            <div className="newhabit">
                <div className="newhabit__title">
                    <h3>Let's add new habit</h3>
                </div>
                <div className="newhabit__control">
                    <label>Yayyy what's your new habit today</label>
                    <br/>
                    <input type="text" onChange={titleChangeHandler} value={habitName}/>
                </div>
                <div className="newhabit__control">
                    <label>Is it negative or postitive one?</label>
                    <br/>
                    <input type="text" onChange={genreChangeHandler} value={habitGenre}/>
                </div>
                <div className="newhabit__control">
                    <label>How many days do you want to keep practice</label>
                    <br/>
                    <input type="text" onChange={targetChangeHandler} value={habitTarget}/>
                </div>
                <div className="newhabit__control">
                    <label>How many times you want to practice every week </label>
                    <br/>
                    <input type="text" onChange={daysChangeHandler} value={habitDays}/>
                </div>
                <div className="newhabit__button">
                    <button className="newhabit__button--add" type="submit">
                        Add ⚡
                    </button>
                </div>
            </div>
        </form>
    )
}

export default HabitForm;