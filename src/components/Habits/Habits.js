import React from 'react';
import Habit from "./Habit";

const Habits = (props) => {

    const updateHabitObject = (habit, checkedId) => {
        let dateCheckedId = checkedId.map(dateFilter);
        habit.checkedId = dateCheckedId;
        habit.checkedId.sort();
        // console.log(props.items);
        habit.streak = calculateStreak(habit.checkedId);
        console.log(calculateRecord(habit.checkedId));
        habit.record = calculateRecord(habit.checkedId);
    }

    const dateFilter = (item) => {
        let checkeddaystring =  item.split('/')[0];
        let parts = checkeddaystring.split('-')
        let checkeddaydate = new Date(parts[2], parts[0]-1, parts[1]);
        let checkeddaydateTime = checkeddaydate.getTime();
        return checkeddaydateTime;
    }

    const calculateStreak = (dateArr) => {
        let currentDate = new Date().setHours(0,0,0,0);
        let isContainCurrentDate = dateArr.includes(currentDate);
        dateArr = dateArr.filter(date => currentDate > date);
        let count = 1;
        dateArr.push(currentDate);
        console.log(dateArr);
        for (let i = dateArr.length - 1; i > 0; i--) {
            let d2 = dateArr[i];
            let d1 = dateArr[i-1];
            if (d2 - d1 > 86400000) {
                break;
            }
            count++;
        }
        count = isContainCurrentDate ? count : count-1;
        return count;
    }

    const calculateRecord = (dateArr) => {
        let record = 0;
        let start = 0;
        let isContinuous = 0;
        // console.log(dateArr);
        if (dateArr.length === 1) {
            return 1;
        }
        for (let end = 1; end <= dateArr.length-1; end++) {
            let d1 = dateArr[end-1];
            let d2 = dateArr[end];
            if (d2 - d1 > 86400000) {
                // isContinuous = false;
                record = Math.max(record, end - start);
                // console.log(start, end ,record);
                start = end;
            } else if (end === dateArr.length - 1) {
                record = Math.max(record, end - start + 1);
            }
        }
        return record;
    }
    return (
        <>
            {props.items.map((habit) => (
                <div className='habit__container' key = {`${habit.name}-${habit._id}`}>
                        <Habit
                            habits = {props.items}
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