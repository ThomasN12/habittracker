import React from "react";
import Checkbox from "./Checkbox";
import fire from "../../img/fire.png";
import { useState, useEffect, useRef } from 'react';
import medal from "../../img/gold-medal.png";
import calendar from "../../img/calendar.png";
import Chart from "../Charts/HabitChart";
import axios from "axios";



const Habit = (props) =>{
    // const [weeks, setWeeks] = useState(props.weeks)


    // const onAddWeek = () =>{
    //     setWeeks(weeks+1);
    // }

    let originChartData = [{
      name: props.daterange[0]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[1]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[2]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[3]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[4]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[5]+'/'+ props.name,
      checked: 0
    },
    {
      name: props.daterange[6]+'/'+ props.name,
      checked: 0
    },
  ]


  const [chartData, setChartData] = useState(originChartData);

  const prevChartData = useRef();

  // Reset chartData when change daterange

  useEffect(() => {
     
    prevChartData.current = chartData;
    console.log("prevChartData:", prevChartData)
    console.log("prevChartData:", prevChartData.current[1].name)
    if (prevChartData.current[1].name !== originChartData[1].name){
        console.log("true");
        setChartData(originChartData)
    }
  }, [props.daterange])


    const [checkedId, setCheckedId] = useState([])
    
    const isMounted = useRef(false);

    // Add Id function

    const addId = (id) => {
        
        const searchIndex = chartData.findIndex((habit) => {
            return habit.name === id
        });
        setChartData((prevChartData) => {
            let newData = [
                ...prevChartData,
            ]
            console.log("chartData: ", newData)
            newData[searchIndex].checked = 1;
            return newData
        })

        setCheckedId((prevIds) =>{            
            return [...prevIds, id]
        })
    }

    // Prevent re-render on the first time render

    useEffect(() => {
        if (isMounted.current) {
            props.onUpdateChecked(props.habit, checkedId);
            //Send update
            console.log(props.checkedId);
            console.log(checkedId);
            // const token = localStorage.getItem('token');
            // const baseUrl = process.env.REACT_APP_ROOT_API;
            // console.log(props.checkedId);
            // let updatedHabit = {
            //     ...props.habit,
            //     checkedId: props.checkedId
            // }
            // // console.log(updatedHabit);
            // let body = {updatedHabit};
            // axios.put(`${baseUrl}/habit/${props.id}`, body, {
            //     headers: {
            //         "auth-token": token,
            //     },
            // }).then(res => {
            //     console.log(res);
            //     console.log("Successfully update a habit");
            // }).catch(err => {
            //     console.log(err);
            // });
        } 
        else {
          isMounted.current = true;
        }

    },[checkedId]);

    // Remove Id function

    const removeId = (id) => {
        const searchIndex = chartData.findIndex((habit) => {
            return habit.name === id
        });
        setChartData((prevChartData) => {
            let newData = [
                ...prevChartData,
            ]
            newData[searchIndex].checked = 0;
            return newData;
        })
        setCheckedId(
           checkedId.filter((item) => item !== id)
        )
    }

    const [show, setShow] = useState(false);

    return (
        <React.Fragment key = {`habit-${props.id}`}>
            <div className="habitname__container" >
                <div className="habit__name">
                    <span>{props.name}</span>
                </div>
                <div className="habit__button">
                    <div className="habit__button--add">
                        <button className="weekadd" 
                        // onClick={onAddWeek}
                        onClick={() => setShow(!show)}
                        >
                            Show details
                        </button>
                    </div>
                </div>
            </div>
            <div className="habit__checkboxes--container">
                {/* {[...Array(weeks)].map((e, i) =>( */}
                    <>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}6`} id={`${props.daterange[0]}/${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}5`} id={`${props.daterange[1]}/${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}4`} id={`${props.daterange[2]}/${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}3`} id={`${props.daterange[3]}/${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}2`} id={`${props.daterange[4]}/${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}1`} id={`${props.daterange[5]}/${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id}0`} id={`${props.daterange[6]}/${props.name}`}></Checkbox>
                    </>   
                {/* ))} */}
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
                        <span>{checkedId.length}</span>
                    </div>
                </div>
            </div>
            {show &&
                <div className="habit__chart">
                    <Chart 
                        chartData = {chartData}
                        checkedId = {checkedId}
                        daterange = {props.daterange}
                        name = {props.name}
                    ></Chart>
            </div>
            }
        </React.Fragment>
    )
}

export default Habit;