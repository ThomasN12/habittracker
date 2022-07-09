import { useState, useContext } from 'react';
import { MainPageTheme } from './Mainpage';
import event from "./../img/event.png";
import Task from './Task.js';
import { 
    format,
    isSameDay 
} 

from 'date-fns'

const TaskList = () => {

    const mainPageTheme = useContext(MainPageTheme);
    const selectedDay = mainPageTheme.selectedDay
    const tasks = mainPageTheme.schedule;
    const taskday = format(selectedDay, 'dd-MMM');
    // const [checkedTask, setCheckedTask] = useState([]);

    const addId = (id) =>{
        mainPageTheme.setCheckedTask((prevTasks) => {
            return [...prevTasks, id];
        })
    }

    const removeId = (id) => {
        mainPageTheme.setCheckedTask(
            mainPageTheme.checkedTask.filter((task) => task !== id) 
        )
    }

    // console.log("checked task: ", mainPageTheme.checkedTask);

    // console.log("tasks: ", tasks)

    let selectedDayTasks = tasks.filter((task) =>
        isSameDay((task.date), selectedDay)
    )

    console.log("selectedDay:" , selectedDayTasks)

    return (
        <div className="tasklist__container">
            <div className="tasklist__name">
                <div className="tasklist__title">
                    <span>Task list</span>
                </div>
                <div className="tasklist__content">
                    <span>{taskday}</span>
                </div>
            </div>
            <div className="task__container">
                {selectedDayTasks.length > 0 ? (
                    selectedDayTasks.map((task) => (
                        <Task 
                        task={task} 
                        name = {task.name}
                        key={task._id} 
                        id={task._id}
                        type = {task.type}
                        onAddId = {addId}
                        onRemoveId = {removeId}
                        checkedTask = {mainPageTheme.checkedTask}
                        />
                    ))
                ) : (
                    <div className='task__blank'>
                        <p>No tasks for today.</p>
                    </div>
                )} 
            </div>
            {/* <div className='task__add'>
                <div className='task__addbutton'>
                    <div className='task__button--content'>
                        <div className='task__button--image'>
                            <img alt='' src=''/>
                        </div>
                        <div className='task__button--add'>
                            <span>Add a task</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default TaskList;