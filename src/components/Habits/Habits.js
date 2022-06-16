import React from 'react';
import Habit from "./Habit";

const Habits = (props) => {

    let updateHabitObject = (habit, checkedId) => {
        Object.assign(habit.checkedId, checkedId)
        props.onSaveHabit(habit);
    }

    return (
        <>
            {props.items.map((habit) => (
                <div className='habit__container' key = {`${habit.name}-${habit.id}`}>
                    <Habit
                        key = {`${habit.name}-${habit.id}`}
                        name = {habit.name}
                        weeks = {habit.weeks}
                        streak = {habit.streak}
                        record = {habit.record}
                        total = {habit.total}
                        daterange = {props.daterange}
                        id = {habit.id}
                        checkedId = {habit.checkedId}
                        habit = {habit}
                        onUpdateChecked = {updateHabitObject}
                    />
                </div>
            ))}
        </>
    )
}
export default Habits;