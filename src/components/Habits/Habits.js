import React from 'react';
import Habit from "./Habit";
import { useState } from 'react';

const Habits = (props) => {

    const [checkData, setCheckData] = useState([]);

    // const totalCheckData = (data) => {
    //     setCheckData((prevData) =>{
    //         return [...prevData, data]
    //     })

    //     console.log("checkData la", checkData)
    // }
    // const [checkBoxes, setCheckBoxes] = useState([]);

    // const onCheckBox = (checkBoxData) =>{
    //     setCheckBoxes((prevCheckBoxes) =>{
    //         return [...prevCheckBoxes, checkBoxData]
    //     })
    // }

    // console.log(checkBoxes);

    // const [totalData, setTotalData] = useState(0);

    return (
        <>
            {props.items.map((habit) => (
                <div className='habit__container' key = {habit.id}>
                    <Habit
                        key = {habit.id}
                        name = {habit.name}
                        weeks = {habit.weeks}
                        streak = {habit.streak}
                        record = {habit.record}
                        total = {habit.total}
                        daterange = {props.daterange}
                        id = {habit.id}
                        // onTotalData = {setTotalData}
                        // habitData = {onCheckBox}
                        // onCheckData = {totalCheckData}
                    />
                </div>
            ))}
        </>
    )
}
export default Habits;