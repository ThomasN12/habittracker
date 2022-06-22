import React from 'react';
import Habit from "./Habit";

const Habits = (props) => {

    const updateHabitObject = (habit, checkedId) => {
        let dateCheckedId = checkedId.map(dateFilter);
        habit.checkedId = dateCheckedId;
        // console.log(props.items);
        console.log(habit.checkedId);
        console.log(checkedId);
    }

    const dateFilter = (item) => {
        let checkeddaystring =  item.split('/')[0];
        let parts = checkeddaystring.split('-')
        let checkeddaydate = new Date(parts[2], parts[0]-1, parts[1]);
        return checkeddaydate;
    }

    return (
        <>
            {props.items.map((habit) => (
                <div className='habit__container' key = {`${habit.name}-${habit._id}`}>
                    <Habit
                        key = {`${habit.name}-${habit._id}`}
                        name = {habit.name}
                        // weeks = {habit.weeks}
                        streak = {habit.streak}
                        record = {habit.record}
                        // total = {habit.total}
                        daterange = {props.daterange}
                        id = {habit._id}
                        // checkedId = {habit.checkedId}
                        habit = {habit}
                        onUpdateChecked = {updateHabitObject}
                    />
                </div>
            ))}
        </>
    )
}
export default Habits;