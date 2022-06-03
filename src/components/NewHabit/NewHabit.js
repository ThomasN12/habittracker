import HabitForm from "./HabitForm";

import plantimg from "../../img/plant.svg";
import paintimg from "../../img/paint.svg"

const NewHabit = (props) => {

    const saveHabitDataHandler = (habitData) =>{
        const habitObject = {
            ...habitData, 
            id: Math.random().toString()
        }
        props.onNewHabit(habitObject);
    }

    return (
        <div className="habitform__container">
            <div className="dots">
                <svg className="dots__img" height="10" width="10">
                    <circle cx="5" cy="5" r="4.5" stroke="transparent" strokeWidth="3" fill="#ffebe9" />
                  </svg>
                <svg className="dots__img" height="10" width="10">
                    <circle cx="5" cy="5" r="4.5" stroke="transparent" strokeWidth="3" fill="#ffebe9" />
                </svg>
                <svg className="dots__img" height="10" width="10">
                    <circle cx="5" cy="5" r="4.5" stroke="transparent" strokeWidth="3" fill="#ffebe9" />
                </svg>
            </div>
            <HabitForm onSaveHabitData = {saveHabitDataHandler}/>
            <div className="plant">
                <img src={plantimg} alt=""/>
            </div>
            <div className="paint">
                <img src={paintimg} alt=""/>
            </div>
        </div> 
    )
}

export default NewHabit;