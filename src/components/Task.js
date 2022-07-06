import event from "./../img/event.png";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Task = (props) => {

    console.log("id: ", props.id)

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
        const baseUrl = process.env.REACT_APP_ROOT_API;
        let updatedSchedule = {
            ...props.task,
            checked: !checkedVal
        }
        let body = {updatedSchedule};
        axios.put(`${baseUrl}/schedule/${props.id}`, body, {
            headers: {
                "accessToken": token,
            },
        }).then(res => {
            // console.log(res);
            // console.log("Successfully update a habit");
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
                        <span>Deadline</span>
                    </label>
                    <label htmlFor={props.id} className="task__item--area"></label>
                    <label htmlFor={props.id} className="task__item--img">
                        <img src={event} alt=""/>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Task;