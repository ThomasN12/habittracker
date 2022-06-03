import React from "react";
// import Checkboxes from "./Checkboxes";
import Checkbox from "./Checkbox";
import fire from "../../img/fire.png";
import { useState, useEffect } from 'react';
import medal from "../../img/gold-medal.png";
import calendar from "../../img/calendar.png";

const Habit = (props) =>{
    // const [habit, setHabit] = useState({...props})
    // console.log(habit);
    const [weeks, setWeeks] = useState(props.weeks)


    const onAddWeek = () =>{
        setWeeks(weeks+1);
        // props.weeks++;
    }

    // const [propsTotal, setPropsTotal] = useState(0);
    const [totalCheckedItem, setTotalCheckedItem] = useState(-14);
    // console.log("weeks la ", weeks)
    
    useEffect(() => {
        setTotalCheckedItem((prevCount) =>{
            return prevCount + 14
        })
    },[weeks])

    const [checkedId, setCheckedId] = useState([])

    const addId = (id) => {
        setCheckedId((prevIds) =>{
            return [...prevIds, id]
        })
    }

    const removeId = (id) => {
        setCheckedId(
           checkedId.filter((item) => item !== id)
        )
    }

    // console.log("CheckedId la", checkedId)


    // console.log("propstotal la ", propsTotal)

    // console.log("totalcheckeditem la ", totalCheckedItem);

    // console.log("checkboxes la", checkBoxes);

    // const [total, setTotal] = useState(totalCheckedItem);

    // const [total, setTotal] = useState(0)

    // const [totalRowChecked, setTotalRowChecked] = useState(0);

    // const [rowCheckedData, setRowCheckedData] = useState(0);

    // const saveRowDataHandler = (rowData) =>{
    //     ...rowData
    // }

    // console.log("tong so o duoc check trong habit la", totalRowChecked);

    return (
        <>
            <div className="habitname__container" key = {props.id}>
                <div className="habit__name">
                    <span>{props.name}</span>
                </div>
                <div className="habit__button">
                    <div className="habit__button--add">
                        <button className="weekadd" onClick={onAddWeek}>
                            Add a week
                        </button>
                    </div>
                </div>
            </div>
            <div className="habit__checkboxes--container">
                {/* {console.log("key la", key)} */}
                {[...Array(weeks)].map((e, i) =>(
                    <>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={props.id*7-6} id={`${props.daterange[0]}-${props.name}`} setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={props.id*7-5} id={`${props.daterange[1]}-${props.name}`} setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={props.id*7-4} id={`${props.daterange[2]}-${props.name}`} setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={props.id*7-3} id={`${props.daterange[3]}-${props.name}`} setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={props.id*7-2} id={`${props.daterange[4]}-${props.name}`} setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={props.id*7-1} id={`${props.daterange[5]}-${props.name}`} setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={props.id*7} id={`${props.daterange[6]}-${props.name}`} setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
                    </>   
                ))}
            </div>
            <div className="habit__info" >
                <div className="current__container">
                    <div className="current__img">
                        <img src={fire} alt=""/>
                    </div>
                    <div className="current__data">
                        <span>03</span>
                    </div>
                </div>
                <div className="record__container">
                    <div className="record__img">
                        <img src={medal} alt=""/>
                    </div>
                    <div className="record__data">
                        <span>05</span>
                    </div>
                </div>
                <div className="total__container">
                    <div className="total__img">
                        <img src={calendar} alt=""/>
                    </div>
                    <div className="total__data">
                        <span>{totalCheckedItem}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Habit;