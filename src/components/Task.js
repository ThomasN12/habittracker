import event from "./../img/event.png";
import { useState, useEffect, useRef } from "react";

const Task = (props) => {

    console.log("id: ", props.id)

    const [checked, setChecked] = useState(false);

    const isMounted = useRef(false)
    
    useEffect(() =>{
        if (isMounted.current){
            if (props.checkedTask.includes(props.id)){
                setChecked(props.id);
            }
        }
        else {
            isMounted.current = true
        }
    },[props.id])

    const checkHandler = (id) => {
        if (checked === false) {
            props.onAddId(id);
            setChecked(id)
        }
        else{
            props.onRemoveId(id);
            setChecked(false);
        }
    }

    console.log("checked: ", checked)

    return (
        <div className="tasklist__item">
            <div className="task__item--container">
                <div className="task__item--content">
                    <input id={props.id} type="checkbox" name="r" value="2" className="task__item" 
                    checked={checked === props.id} 
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