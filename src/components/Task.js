import event from "./../img/event.png";
import activity from "./../img/activity.png";
import deadline from "./../img/deadline.png";
import { useState, useEffect, useRef, useContext } from "react";
import { MainPageTheme } from "./Mainpage";
import { toast } from "react-toastify";
const Task = (props) => {
    const mainPageTheme = useContext(MainPageTheme)
    const { api } = mainPageTheme;
    console.log("id: ", props.id)
    var img;

    switch(props.type){
        case 'Deadline':
            img = deadline;
            break;
        case 'Event':
            img = event;
            break;
        default:
            img = activity;
            break;
    }

    const [checked, setChecked] = useState(false);

    const isMounted = useRef(false)
    
    useEffect(() =>{
        // if (isMounted.current){
            if (props.checkedTask.includes(props.id)){
                setChecked(true);
            }
        // }
        // else {
        //     isMounted.current = true
        // }
    },[props.id])

    const checkHandler = (id) => {
        if (!checked) {
            props.onAddId(id);
        }
        else{
            props.onRemoveId(id);
        }
        let checkedVal = checked;
        setChecked(prev => !prev);
        //Send update
        const token = localStorage.getItem('token');
        let updatedSchedule = {
            ...props.task,
            checked: !checkedVal
        }
        let body = {updatedSchedule};
        api.put(`/schedule/${props.id}`, body, {
            headers: {
                "accessToken": token,
            },
        }).then(res => {
            // console.log(res);
        }).catch(err => {
            toast.error(err.response.data);
        });

    }

    console.log("checked: ", checked)

    return (
        <div className="tasklist__item">
            <div className="task__item--container">
                <div className="task__item--content">
                    <input id={props.id} type="checkbox" name="r" value="2" className="task__item" 
                    checked={checked === true} 
                    onChange={() => checkHandler(props.id)}
                    />
                    <label htmlFor={props.id} className="task__name">
                        {props.name}
                    </label>
                    <label htmlFor={props.id} className="task__item--type">
                        <span>{props.type}</span>
                    </label>
                    <label htmlFor={props.id} className="task__item--area"></label>
                    <label htmlFor={props.id} className="task__item--img">
                        <img src={img} alt=""/>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Task;